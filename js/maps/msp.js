function mapData() {
    return {
        "airport": {
            "elevation": 842,
            "runways": {
                "12L": {
                    "name": "12L",
                    "width": 150,
                    "length": 8200,
                },
                "30R": {
                    "name": "30R",
                    "width": 150,
                    "length": 8200,
                }
            }
        },
        "scale": {
            "radius": 40,
            "rings": 8,
        },
        arrivalFixes: [
            {
                name: "OLLEE",
                course: 360,
                heading: 135
            }
       ]
    }
}

module.exports = mapData
