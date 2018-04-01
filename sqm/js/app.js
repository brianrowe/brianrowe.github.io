viewer = pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "circle",
        "sceneFadeDuration": 1000,
        "autoLoad": true
    },
    "scenes": {
        "circle": {
            "title": "The Circle",
            "pitch": 2.571398503498898,
            "yaw": 9.64348522373787,
            "type": "equirectangular",
            "panorama": "pics/DSCN0077.JPG",
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 56,
                    "type": "scene",
                    "text": "Kitchen",
                    "sceneId": "kitchen"
                },
                {
                    "pitch": 1.5,
                    "yaw": 46,
                    "type": "scene",
                    "text": "Treadmill",
                    "sceneId": "treadmill"
                },
                {
                    "pitch": 0,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Sitting Area",
                    "sceneId": "sitting"
                },
                {
                    "pitch": 2,
                    "yaw": -18,
                    "type": "scene",
                    "text": "Ping Pong Table",
                    "sceneId": "pingpong"
                },
                {
                    "pitch": 1,
                    "yaw": -60,
                    "type": "scene",
                    "text": "Pool Table",
                    "sceneId": "pooltable"
                },
                {
                    "pitch": 1,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Conference Room",
                    "sceneId": "conf"
                },
                {
                    "pitch": -2,
                    "yaw": -170,
                    "type": "scene",
                    "text": "Work Area",
                    "sceneId": "desks"
                }
            ]
        },
        "kitchen": {
            "title": "Kitchen",
            "pitch": 1.1105893108740874,
            "yaw": -77.42048469540697,
            "type": "equirectangular",
            "panorama": "pics/DSCN0082.JPG",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": -77.42048469540697,
                    "type": "scene",
                    "text": "Sitting Area",
                    "sceneId": "sitting"
                }
            ]
        },
        "sitting": {
            "title": "Sitting Area",
            "pitch": -45.63493282909704,
            "yaw": -151.8432953648686,
            "type": "equirectangular",
            "panorama": "pics/DSCN0085.JPG",
            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": 12,
                    "type": "scene",
                    "text": "Kitchen",
                    "sceneId": "kitchen"
                },
                {
                    "pitch": 1,
                    "yaw": 60,
                    "type": "scene",
                    "text": "Conference Room",
                    "sceneId": "conf"
                },
                {
                    "pitch": -12,
                    "yaw": 112,
                    "type": "scene",
                    "text": "The Circle",
                    "sceneId": "circle"
                },
                {
                    "pitch": 0,
                    "yaw": 105,
                    "type": "scene",
                    "text": "Work Area",
                    "sceneId": "desks"
                }
            ]
        },
        "treadmill": {
            "title": "Treadmill",
            "pitch": -6.837258953414106,
            "yaw": -38.792071511556394,
            "type": "equirectangular",
            "panorama": "pics/DSCN0084.JPG",
            "hotSpots": [
                {
                    "pitch": -6.837258953414106,
                    "yaw": -33.5,
                    "type": "scene",
                    "text": "Sitting Area",
                    "sceneId": "sitting"
                },
                {
                    "pitch": -6.837258953414106,
                    "yaw": -50,
                    "type": "scene",
                    "text": "The Circle",
                    "sceneId": "circle"
                }
            ]
        },
        "pooltable": {
            "title": "Pool Table",
            "pitch": -4.146117709109646,
            "yaw": -110.57441349591882,
            "type": "equirectangular",
            "panorama": "pics/DSCN0076.JPG",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": -125,
                    "type": "scene",
                    "text": "Work Area",
                    "sceneId": "desks"
                },
                {
                    "pitch": -5,
                    "yaw": 85,
                    "type": "scene",
                    "text": "Ping Pong Table",
                    "sceneId": "pingpong"
                },
                {
                    "pitch": -5,
                    "yaw": 163,
                    "type": "scene",
                    "text": "Kitchen",
                    "sceneId": "kitchen"
                },
                {
                    "pitch": -5,
                    "yaw": -170,
                    "type": "scene",
                    "text": "Conference Room",
                    "sceneId": "conf"
                },
                {
                    "pitch": -15,
                    "yaw": -160,
                    "type": "scene",
                    "text": "The Circle",
                    "sceneId": "circle"
                }
            ]
        },
        "pingpong": {
            "title": "Ping Pong Table",
            "pitch": -8.458563489859117,
            "yaw": 84.01493990372339,
            "type": "equirectangular",
            "panorama": "pics/DSCN0075.JPG",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 55,
                    "type": "scene",
                    "text": "The Circle",
                    "sceneId": "circle"
                },
                {
                    "pitch": -5,
                    "yaw": 84,
                    "type": "scene",
                    "text": "Pool Table",
                    "sceneId": "pooltable"
                }
            ]
        },
        "desks": {
            "title": "Work Area",
            "pitch": -6.007368084277864,
            "yaw": 2.6663710898050015,
            "type": "equirectangular",
            "panorama": "pics/DSCN0079.JPG",
            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": -10,
                    "type": "scene",
                    "text": "The Circle",
                    "sceneId": "circle"
                },
                {
                    "pitch": -5,
                    "yaw": 50,
                    "type": "scene",
                    "text": "Conference Room",
                    "sceneId": "conf"
                },
                {
                    "pitch": -3,
                    "yaw": -40,
                    "type": "scene",
                    "text": "Pool Table",
                    "sceneId": "pooltable"
                },
                {
                    "pitch": -1,
                    "yaw": 19,
                    "type": "scene",
                    "text": "Treadmill",
                    "sceneId": "treadmill"
                },
                {
                    "pitch": -1,
                    "yaw": 22,
                    "type": "scene",
                    "text": "Kitchen",
                    "sceneId": "kitchen"
                },{
                    "pitch": -3,
                    "yaw": 3,
                    "type": "scene",
                    "text": "Sitting Area",
                    "sceneId": "sitting"
                }
            ]
        },
        "conf": {
            "title": "Conference Room",
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "pics/DSCN0080.JPG",
            "hotSpots": [
                {
                    "pitch": -8,
                    "yaw": -45,
                    "type": "scene",
                    "text": "Sitting Area",
                    "sceneId": "sitting"
                },
                {
                    "pitch": -10,
                    "yaw": -85,
                    "type": "scene",
                    "text": "The Circle",
                    "sceneId": "circle"
                },
                {
                    "pitch": -10,
                    "yaw": -130,
                    "type": "scene",
                    "text": "Work Area",
                    "sceneId": "desks"
                }
            ]
        }
    }
});