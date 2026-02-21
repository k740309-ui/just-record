import { config, fields, collection } from '@keystatic/core';

// DEV 환경인지 확인 (Astro 빌드 시 production으로 인식됨)
const isDev = process.env.NODE_ENV === 'development';

export default config({
    storage: isDev ? {
        kind: 'local',
    } : {
        kind: 'github',
        repo: 'k740309-ui/just-record',
    },
    ui: {
        brand: {
            name: 'JUST RECORD Admin',
        }
    },
    collections: {
        taste: collection({
            label: 'TASTE & STAY (맛과 머묾)',
            slugField: 'title',
            path: 'src/content/taste/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: '제목' } }),
                date: fields.date({ label: '작성일', defaultValue: { kind: 'today' } }),
                description: fields.text({ label: '요약(Description)', multiline: true, validation: { isRequired: true } }),
                location: fields.text({ label: '장소' }),
                rating: fields.text({ label: '한줄평' }),
                coverImage: fields.image({ label: '커버 이미지', directory: 'public/images', publicPath: '/images' }),
                content: fields.mdx({
                    label: '본문',
                    options: {
                        image: { directory: 'public/images', publicPath: '/images/' },
                    },
                }),
            },
        }),
        screen: collection({
            label: 'SCREEN (스크린)',
            slugField: 'title',
            path: 'src/content/screen/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: '제목' } }),
                date: fields.date({ label: '작성일', defaultValue: { kind: 'today' } }),
                status: fields.select({
                    label: '시청 상태',
                    options: [
                        { label: '선택 안함', value: 'none' },
                        { label: '시청 중', value: 'watching' },
                        { label: '완결', value: 'completed' },
                        { label: '인생작', value: 'masterpiece' }
                    ],
                    defaultValue: 'none'
                }),
                description: fields.text({ label: '요약(Description)', multiline: true, validation: { isRequired: true } }),
                genre: fields.text({ label: '장르' }),
                rating: fields.text({ label: '별점' }),
                content: fields.mdx({
                    label: '본문',
                    options: {
                        image: { directory: 'public/images', publicPath: '/images/' },
                    },
                }),
            },
        }),
        thoughts: collection({
            label: 'THOUGHTS (단상)',
            slugField: 'title',
            path: 'src/content/thoughts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: '제목' } }),
                date: fields.date({ label: '작성일', defaultValue: { kind: 'today' } }),
                description: fields.text({ label: '요약(Description)', multiline: true, validation: { isRequired: true } }),
                tags: fields.array(fields.text({ label: '태그' }), { label: 'Tags', itemLabel: props => props.value }),
                content: fields.mdx({
                    label: '본문',
                    options: {
                        image: { directory: 'public/images', publicPath: '/images/' },
                    },
                }),
            },
        }),
    },
});
