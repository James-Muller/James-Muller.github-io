var config = {
    style: 'mapbox://styles/james-muller/ckc1irt3t5uco1inxu9lgwybr',
    accessToken: 'pk.eyJ1IjoiamFtZXMtbXVsbGVyIiwiYSI6ImNrYzE5M25zMTBhOTYydHBocWZmaGh1eGgifQ.npv4XoDycgCFj13Y4ADcBA',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '30YW',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'James-Muller',
            title: '三十年战争',
            image: '',
            description: '三十年战争开始于意大利维也纳',
            location: {
                center: [16.36824, 48.20515],
                zoom: 7.60,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'thirty-years-war',
                    opacity: .50
                }
            ],
            onChapterExit: [
                {
                    layer: 'thirty-years-war',
                    opacity: 0
                }
            ]
        },
        {
            id: 'James-Muller',
            title: '战火蔓延',
            image: '',
            description: '瓦伦斯坦率领的帝国军队随即扩展到了波西米亚（今布拉格）境内',
            location: {
                center: [14.46331, 50.08678],
                zoom: 4.87,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'next-move',
                    opacity: .50
                }
            ],
            onChapterExit: [
                {
                    layer: 'next-move',
                    opacity: 0
                }
            ]
        }
    ]
};
