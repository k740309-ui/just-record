import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "local"
  },
  ui: {
    brand: {
      name: "JUST RECORD Admin"
    }
  },
  collections: {
    taste: collection({
      label: "TASTE & STAY (맛과 머묾)",
      slugField: "title",
      path: "src/content/taste/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "제목" } }),
        date: fields.date({ label: "작성일", defaultValue: { kind: "today" } }),
        description: fields.text({ label: "요약(Description)", multiline: true, validation: { isRequired: true } }),
        location: fields.text({ label: "장소" }),
        rating: fields.text({ label: "한줄평" }),
        coverImage: fields.image({ label: "커버 이미지", directory: "public/images", publicPath: "/images" }),
        content: fields.mdx({
          label: "본문",
          options: {
            image: { directory: "public/images", publicPath: "/images/" }
          }
        })
      }
    }),
    screen: collection({
      label: "SCREEN (스크린)",
      slugField: "title",
      path: "src/content/screen/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "제목" } }),
        date: fields.date({ label: "작성일", defaultValue: { kind: "today" } }),
        status: fields.select({
          label: "시청 상태",
          options: [
            { label: "선택 안함", value: "none" },
            { label: "시청 중", value: "watching" },
            { label: "완결", value: "completed" },
            { label: "인생작", value: "masterpiece" }
          ],
          defaultValue: "none"
        }),
        description: fields.text({ label: "요약(Description)", multiline: true, validation: { isRequired: true } }),
        genre: fields.text({ label: "장르" }),
        rating: fields.text({ label: "별점" }),
        content: fields.mdx({
          label: "본문",
          options: {
            image: { directory: "public/images", publicPath: "/images/" }
          }
        })
      }
    }),
    thoughts: collection({
      label: "THOUGHTS (단상)",
      slugField: "title",
      path: "src/content/thoughts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "제목" } }),
        date: fields.date({ label: "작성일", defaultValue: { kind: "today" } }),
        description: fields.text({ label: "요약(Description)", multiline: true, validation: { isRequired: true } }),
        tags: fields.array(fields.text({ label: "태그" }), { label: "Tags", itemLabel: (props) => props.value }),
        content: fields.mdx({
          label: "본문",
          options: {
            image: { directory: "public/images", publicPath: "/images/" }
          }
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
