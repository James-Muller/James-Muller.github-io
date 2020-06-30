var config = {
    style: 'mapbox://styles/james-muller/ckc1irt3t5uco1inxu9lgwybr',
    accessToken: 'pk.eyJ1IjoiamFtZXMtbXVsbGVyIiwiYSI6ImNrYzE5M25zMTBhOTYydHBocWZmaGh1eGgifQ.npv4XoDycgCFj13Y4ADcBA',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'JamesMuller',
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
                    layer: 'thirty years war',
                    opacity: .50
                }
            ],
            onChapterExit: [
                {
                    layer: 'thirty years war',
                    opacity: 0
                }
            ]
        },
        {
            id: 'JamesMuller',
            title: 'Pennypack Park Trails',
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
            location: {
                center: [-75.05685, 40.06839],
                zoom: 13.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
