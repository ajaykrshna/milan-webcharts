//NEED TO BE CONVERTED

const SPORTS_BOYS = {
    'CRICKET': { 'CHARAKA': 100, 'SUSRUTA': 40, 'KAUTILYA': 10, 'VYASA': 10, 'BRAHMAGUPTA': 20, 'VARAHAMIHIRA': 10, 'RAMANUJA': 70, 'KAPILA': 10 },
    'FOOTBALL': { 'CHARAKA': 70, 'SUSRUTA': 100, 'KAUTILYA': 10, 'VYASA': 20, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 10, 'RAMANUJA': 40, 'KAPILA': 10 },
    'HOCKEY': { 'CHARAKA': 70, 'SUSRUTA': 40, 'KAUTILYA': 10, 'VYASA': 100, 'BRAHMAGUPTA': 20, 'VARAHAMIHIRA': 10, 'RAMANUJA': 10, 'KAPILA': 0 },
    'VOLLEYBALL': { 'CHARAKA': 100, 'SUSRUTA': 20, 'KAUTILYA': 10, 'VYASA': 10, 'BRAHMAGUPTA': 40, 'VARAHAMIHIRA': 70, 'RAMANUJA': 10, 'KAPILA': 10 },
    'BASKETBALL': { 'CHARAKA': 100, 'SUSRUTA': 10, 'KAUTILYA': 10, 'VYASA': 20, 'BRAHMAGUPTA': 70, 'VARAHAMIHIRA': 10, 'RAMANUJA': 40, 'KAPILA': 10 },
    'BADMINTON': { 'CHARAKA': 100, 'SUSRUTA': 20, 'KAUTILYA': 10, 'VYASA': 40, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 70, 'RAMANUJA': 10, 'KAPILA': 10 },
    'TENNIS': { 'CHARAKA': 10, 'SUSRUTA': 10, 'KAUTILYA': 70, 'VYASA': 40, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 10, 'RAMANUJA': 20, 'KAPILA': 100 },
    'TABLE TENNIS': { 'CHARAKA': 10, 'SUSRUTA': 40, 'KAUTILYA': 20, 'VYASA': 10, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 100, 'RAMANUJA': 70, 'KAPILA': 10 },
    'CARROM': { 'CHARAKA': 10, 'SUSRUTA': 10, 'KAUTILYA': 20, 'VYASA': 70, 'BRAHMAGUPTA': 100, 'VARAHAMIHIRA': 10, 'RAMANUJA': 40, 'KAPILA': 10 },
    'CHESS': { 'CHARAKA': 100, 'SUSRUTA': 70, 'KAUTILYA': 20, 'VYASA': 10, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 10, 'RAMANUJA': 40, 'KAPILA': 10 },
    'SQUASH': { 'CHARAKA': 50, 'SUSRUTA': 5, 'KAUTILYA': 5, 'VYASA': 20, 'BRAHMAGUPTA': 5, 'VARAHAMIHIRA': 35, 'RAMANUJA': 10, 'KAPILA': 5 },
    'WEIGHTLIFTING': { 'CHARAKA': 20, 'SUSRUTA': 10, 'KAUTILYA': 40, 'VYASA': 10, 'BRAHMAGUPTA': 70, 'VARAHAMIHIRA': 10, 'RAMANUJA': 100, 'KAPILA': 10 },
    'ESPORTS': { 'CHARAKA': 80, 'SUSRUTA': 20, 'KAUTILYA': 20, 'VYASA': 140, 'BRAHMAGUPTA': 20, 'VARAHAMIHIRA': 200, 'RAMANUJA': 40, 'KAPILA': 20 },
    'AQUATICS': { 'CHARAKA': 210, 'SUSRUTA': 21, 'KAUTILYA': 21, 'VYASA': 84, 'BRAHMAGUPTA': 147, 'VARAHAMIHIRA': 42, 'RAMANUJA': 21, 'KAPILA': 21 },
    'ATHLETICS': { 'CHARAKA': 300, 'SUSRUTA': 30, 'KAUTILYA': 30, 'VYASA': 30, 'BRAHMAGUPTA': 60, 'VARAHAMIHIRA': 210, 'RAMANUJA': 150, 'KAPILA': 30 },
    'TOTAL POINTS': { 'CHARAKA': 1330, 'SUSRUTA': 446, 'KAUTILYA': 306, 'VYASA': 614, 'BRAHMAGUPTA': 602, 'VARAHAMIHIRA': 807, 'RAMANUJA': 671, 'KAPILA': 266 },
    'OVERALL SCORE': { 'CHARAKA': 263.7842126, 'SUSRUTA': 88.45696152, 'KAUTILYA': 60.6902023, 'VYASA': 121.7770726, 'BRAHMAGUPTA': 119.3970647, 'VARAHAMIHIRA': 160.0555335, 'RAMANUJA': 133.0821103, 'KAPILA': 52.75684252 }
}

const SPORTS_GIRLS =
    {
         'CRICKET': { 'ARYABHATTA': 70, 'BHASKARA': 40, 'MAITREYI': 20, 'GARGI': 100 } ,
         'FOOTBALL': { 'ARYABHATTA': 100, 'BHASKARA': 0, 'MAITREYI': 40, 'GARGI': 70 } ,
         'DODGE BALL': { 'ARYABHATTA': 70, 'BHASKARA': 40, 'MAITREYI': 20, 'GARGI': 100 } ,
         'VOLLEYBALL': { 'ARYABHATTA': 70, 'BHASKARA': 40, 'MAITREYI': 20, 'GARGI': 100 } ,
         'BASKETBALL': { 'ARYABHATTA': 100, 'BHASKARA': 0, 'MAITREYI': 40, 'GARGI': 70 } ,
         'BADMINTON': { 'ARYABHATTA': 70, 'BHASKARA': 40, 'MAITREYI': 20, 'GARGI': 100 } ,
         'TENNIS': { 'ARYABHATTA': 40, 'BHASKARA': 100, 'MAITREYI': 0, 'GARGI': 70 } ,
         'TABLE TENNIS': { 'ARYABHATTA': 70, 'BHASKARA': 20, 'MAITREYI': 40, 'GARGI': 100 } ,
         'CARROM': { 'ARYABHATTA': 100, 'BHASKARA': 40, 'MAITREYI': 20, 'GARGI': 70 } ,
         'CHESS': { 'ARYABHATTA': 40, 'BHASKARA': 70, 'MAITREYI': 20, 'GARGI': 100 } ,
         'SQUASH': { 'ARYABHATTA': 10, 'BHASKARA': 50, 'MAITREYI': 20, 'GARGI': 35 } ,
         'WEIGHTLIFTING': { 'ARYABHATTA': 0, 'BHASKARA': 40, 'MAITREYI': 70, 'GARGI': 100 } ,
         'ESPORTS': { 'ARYABHATTA': 80, 'BHASKARA': 200, 'MAITREYI': 0, 'GARGI': 140 } ,
         'AQUATICS': { 'ARYABHATTA': 84, 'BHASKARA': 210, 'MAITREYI': 147, 'GARGI': 42 } ,
         'ATHLETICS': { 'ARYABHATTA': 300, 'BHASKARA': 60, 'MAITREYI': 210, 'GARGI': 120 } ,
         'TOTAL POINTS': { 'ARYABHATTA': 1204, 'BHASKARA': 950, 'MAITREYI': 687, 'GARGI': 1317 } ,
         'OVERALL SCORE': { 'ARYABHATTA': 144.7811448, 'BHASKARA': 114.2376142, 'MAITREYI': 82.61183261, 'GARGI': 158.3694084 } 
    }

const CULTI =
    [
        { 'SOLO DANCE': { 'ARYABHATTA': 3, 'BHASKARA': 9, 'MAITREYI': 30, 'GARGI': 21, 'CHARAKA': 9, 'SUSRUTA': 3, 'KAUTILYA': 3, 'VYASA': 3, 'BRAHMAGUPTA': 3, 'VARAHAMIHIRA': 3, 'RAMANUJA': 3, 'KAPILA': 3 } },
        { 'DUO-TRIO DANCE': { 'ARYABHATTA': 4, 'BHASKARA': 4, 'MAITREYI': 28, 'GARGI': 48, 'CHARAKA': 4, 'SUSRUTA': 4, 'KAUTILYA': 4, 'VYASA': 0, 'BRAHMAGUPTA': 4, 'VARAHAMIHIRA': 4, 'RAMANUJA': 16, 'KAPILA': 0 } },
        { 'GROUP DANCE': { 'ARYABHATTA': 5, 'BHASKARA': 35, 'MAITREYI': 5, 'GARGI': 40, 'CHARAKA': 10, 'SUSRUTA': 5, 'KAUTILYA': 5, 'VYASA': 5, 'BRAHMAGUPTA': 5, 'VARAHAMIHIRA': 20, 'RAMANUJA': 5, 'KAPILA': 0 } },
        { 'PANDORAS BOX OF DRAMA': { 'ARYABHATTA': 10, 'BHASKARA': 10, 'MAITREYI': 10, 'GARGI': 20, 'CHARAKA': 10, 'SUSRUTA': 70, 'KAUTILYA': 10, 'VYASA': 10, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 40, 'RAMANUJA': 100, 'KAPILA': 10 } },
        { 'STILL FRAME PHOTOGRAPHY': { 'ARYABHATTA': 0, 'BHASKARA': 70, 'MAITREYI': 10, 'GARGI': 40, 'CHARAKA': 10, 'SUSRUTA': 10, 'KAUTILYA': 20, 'VYASA': 0, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 10, 'RAMANUJA': 100, 'KAPILA': 0 } },
        { 'THE LOW EFFORT COMPETITION': { 'ARYABHATTA': 0, 'BHASKARA': 10, 'MAITREYI': 20, 'GARGI': 40, 'CHARAKA': 100, 'SUSRUTA': 10, 'KAUTILYA': 0, 'VYASA': 0, 'BRAHMAGUPTA': 0, 'VARAHAMIHIRA': 10, 'RAMANUJA': 10, 'KAPILA': 70 } },
        { 'BMC CODENAMES': { 'ARYABHATTA': 20, 'BHASKARA': 0, 'MAITREYI': 0, 'GARGI': 5, 'CHARAKA': 0, 'SUSRUTA': 50, 'KAUTILYA': 5, 'VYASA': 0, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 5, 'RAMANUJA': 35, 'KAPILA': 5 } },
        { 'DUMB CHARADES': { 'ARYABHATTA': 5, 'BHASKARA': 0, 'MAITREYI': 5, 'GARGI': 35, 'CHARAKA': 10, 'SUSRUTA': 20, 'KAUTILYA': 5, 'VYASA': 5, 'BRAHMAGUPTA': 5, 'VARAHAMIHIRA': 5, 'RAMANUJA': 5, 'KAPILA': 50 } },
        { 'GENERAL QUIZ': { 'ARYABHATTA': 4, 'BHASKARA': 4, 'MAITREYI': 4, 'GARGI': 4, 'CHARAKA': 4, 'SUSRUTA': 40, 'KAUTILYA': 4, 'VYASA': 8, 'BRAHMAGUPTA': 28, 'VARAHAMIHIRA': 4, 'RAMANUJA': 16, 'KAPILA': 4 } },
        { 'NOT SO SORRY': { 'ARYABHATTA': 2, 'BHASKARA': 2, 'MAITREYI': 14, 'GARGI': 8, 'CHARAKA': 2, 'SUSRUTA': 2, 'KAUTILYA': 2, 'VYASA': 2, 'BRAHMAGUPTA': 2, 'VARAHAMIHIRA': 20, 'RAMANUJA': 2, 'KAPILA': 4 } },
        { 'BATTLE OF BANDS': { 'ARYABHATTA': 6, 'BHASKARA': 6, 'MAITREYI': 0, 'GARGI': 6, 'CHARAKA': 6, 'SUSRUTA': 0, 'KAUTILYA': 24, 'VYASA': 6, 'BRAHMAGUPTA': 6, 'VARAHAMIHIRA': 60, 'RAMANUJA': 42, 'KAPILA': 6 } },
        { 'SOLO SINGING': { 'ARYABHATTA': 3, 'BHASKARA': 15, 'MAITREYI': 3, 'GARGI': 3, 'CHARAKA': 3, 'SUSRUTA': 3, 'KAUTILYA': 21, 'VYASA': 3, 'BRAHMAGUPTA': 3, 'VARAHAMIHIRA': 3, 'RAMANUJA': 39, 'KAPILA': 3 } },
        { 'MINI POETRY JAM': { 'ARYABHATTA': 2, 'BHASKARA': 2, 'MAITREYI': 4, 'GARGI': 8, 'CHARAKA': 20, 'SUSRUTA': 2, 'KAUTILYA': 0, 'VYASA': 2, 'BRAHMAGUPTA': 2, 'VARAHAMIHIRA': 4, 'RAMANUJA': 14, 'KAPILA': 2 } },
        { 'JUNK ART SHOW': { 'ARYABHATTA': 100, 'BHASKARA': 0, 'MAITREYI': 10, 'GARGI': 20, 'CHARAKA': 70, 'SUSRUTA': 10, 'KAUTILYA': 0, 'VYASA': 10, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 0, 'RAMANUJA': 40, 'KAPILA': 0 } },
        { 'NAVARASA NATANA': { 'ARYABHATTA': 5, 'BHASKARA': 50, 'MAITREYI': 5, 'GARGI': 5, 'CHARAKA': 5, 'SUSRUTA': 10, 'KAUTILYA': 5, 'VYASA': 5, 'BRAHMAGUPTA': 5, 'VARAHAMIHIRA': 35, 'RAMANUJA': 20, 'KAPILA': 5 } },
        { 'RAP BATTLE': { 'ARYABHATTA': 3, 'BHASKARA': 3, 'MAITREYI': 21, 'GARGI': 3, 'CHARAKA': 3, 'SUSRUTA': 6, 'KAUTILYA': 3, 'VYASA': 12, 'BRAHMAGUPTA': 30, 'VARAHAMIHIRA': 3, 'RAMANUJA': 3, 'KAPILA': 0 } },
        { 'TREASURE HUNT': { 'ARYABHATTA': 70, 'BHASKARA': 10, 'MAITREYI': 10, 'GARGI': 100, 'CHARAKA': 20, 'SUSRUTA': 10, 'KAUTILYA': 10, 'VYASA': 10, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 10, 'RAMANUJA': 40, 'KAPILA': 10 } },
        { 'FASHION SHOW': { 'ARYABHATTA': 40, 'BHASKARA': 10, 'MAITREYI': 20, 'GARGI': 100, 'CHARAKA': 10, 'SUSRUTA': 70, 'KAUTILYA': 0, 'VYASA': 0, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 10, 'RAMANUJA': 10, 'KAPILA': 0 } },
        { 'TOTAL POINTS': { 'ARYABHATTA': 282, 'BHASKARA': 240, 'MAITREYI': 199, 'GARGI': 506, 'CHARAKA': 296, 'SUSRUTA': 325, 'KAUTILYA': 121, 'VYASA': 81, 'BRAHMAGUPTA': 153, 'VARAHAMIHIRA': 246, 'RAMANUJA': 500, 'KAPILA': 172 } },
        { 'OVERALL SCORE': { 'ARYABHATTA': 90.35565524, 'BHASKARA': 76.89842999, 'MAITREYI': 63.76161487, 'GARGI': 162.1275232, 'CHARAKA': 94.84139699, 'SUSRUTA': 104.1332906, 'KAUTILYA': 38.76962512, 'VYASA': 25.95322012, 'BRAHMAGUPTA': 49.02274912, 'VARAHAMIHIRA': 78.82089074, 'RAMANUJA': 160.2050625, 'KAPILA': 55.11054149 } }
    ]

const TECHY =
    [
        { 'GAME JAM': { 'ARYABHATTA': 0, 'BHASKARA': 0, 'MAITREYI': 0, 'GARGI': 10, 'CHARAKA': 10, 'SUSRUTA': 10, 'KAUTILYA': 100, 'VYASA': 20, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 40, 'RAMANUJA': 70, 'KAPILA': 0 } },
        { 'ROBO SOCCER': { 'ARYABHATTA': 0, 'BHASKARA': 10, 'MAITREYI': 0, 'GARGI': 10, 'CHARAKA': 20, 'SUSRUTA': 0, 'KAUTILYA': 40, 'VYASA': 10, 'BRAHMAGUPTA': 100, 'VARAHAMIHIRA': 0, 'RAMANUJA': 70, 'KAPILA': 10 } },
        { 'CAPTURE THE FLAG': { 'ARYABHATTA': 10, 'BHASKARA': 10, 'MAITREYI': 0, 'GARGI': 10, 'CHARAKA': 100, 'SUSRUTA': 10, 'KAUTILYA': 10, 'VYASA': 70, 'BRAHMAGUPTA': 40, 'VARAHAMIHIRA': 20, 'RAMANUJA': 10, 'KAPILA': 10 } },
        { 'HACKATHON': { 'ARYABHATTA': 0, 'BHASKARA': 0, 'MAITREYI': 0, 'GARGI': 0, 'CHARAKA': 10, 'SUSRUTA': 0, 'KAUTILYA': 100, 'VYASA': 20, 'BRAHMAGUPTA': 70, 'VARAHAMIHIRA': 0, 'RAMANUJA': 40, 'KAPILA': 0 } },
        { 'ASTRONOMY QUIZ': { 'ARYABHATTA': 0, 'BHASKARA': 6, 'MAITREYI': 24, 'GARGI': 6, 'CHARAKA': 60, 'SUSRUTA': 0, 'KAUTILYA': 12, 'VYASA': 6, 'BRAHMAGUPTA': 42, 'VARAHAMIHIRA': 6, 'RAMANUJA': 6, 'KAPILA': 6 } },
        { 'IDEATHON': { 'ARYABHATTA': 0, 'BHASKARA': 0, 'MAITREYI': 0, 'GARGI': 42, 'CHARAKA': 24, 'SUSRUTA': 60, 'KAUTILYA': 6, 'VYASA': 6, 'BRAHMAGUPTA': 6, 'VARAHAMIHIRA': 12, 'RAMANUJA': 6, 'KAPILA': 0 } },
        { 'CODEGOLF': { 'ARYABHATTA': 10, 'BHASKARA': 10, 'MAITREYI': 10, 'GARGI': 10, 'CHARAKA': 10, 'SUSRUTA': 10, 'KAUTILYA': 100, 'VYASA': 20, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 40, 'RAMANUJA': 70, 'KAPILA': 0 } },
        { 'WATER ROCKETRY': { 'ARYABHATTA': 10, 'BHASKARA': 10, 'MAITREYI': 0, 'GARGI': 10, 'CHARAKA': 40, 'SUSRUTA': 10, 'KAUTILYA': 10, 'VYASA': 10, 'BRAHMAGUPTA': 20, 'VARAHAMIHIRA': 70, 'RAMANUJA': 100, 'KAPILA': 0 } },
        { 'CAD MODELING': { 'ARYABHATTA': 0, 'BHASKARA': 10, 'MAITREYI': 0, 'GARGI': 100, 'CHARAKA': 70, 'SUSRUTA': 10, 'KAUTILYA': 20, 'VYASA': 0, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 10, 'RAMANUJA': 40, 'KAPILA': 10 } },
        { 'RC CAR RACING': { 'ARYABHATTA': 0, 'BHASKARA': 0, 'MAITREYI': 0, 'GARGI': 0, 'CHARAKA': 70, 'SUSRUTA': 0, 'KAUTILYA': 100, 'VYASA': 0, 'BRAHMAGUPTA': 10, 'VARAHAMIHIRA': 0, 'RAMANUJA': 40, 'KAPILA': 0 } },
        { 'SOLVE THE CASE': { 'ARYABHATTA': 0, 'BHASKARA': 10, 'MAITREYI': 10, 'GARGI': 10, 'CHARAKA': 10, 'SUSRUTA': 20, 'KAUTILYA': 10, 'VYASA': 10, 'BRAHMAGUPTA': 100, 'VARAHAMIHIRA': 70, 'RAMANUJA': 40, 'KAPILA': 10 } },
        { 'TOTAL POINTS': { 'ARYABHATTA': 30, 'BHASKARA': 66, 'MAITREYI': 44, 'GARGI': 208, 'CHARAKA': 424, 'SUSRUTA': 130, 'KAUTILYA': 508, 'VYASA': 172, 'BRAHMAGUPTA': 418, 'VARAHAMIHIRA': 268, 'RAMANUJA': 492, 'KAPILA': 46 } },
        { 'OVERALL SCORE': { 'ARYABHATTA': 10.69137562, 'BHASKARA': 23.52102637, 'MAITREYI': 15.68068425, 'GARGI': 74.12687099, 'CHARAKA': 151.1047755, 'SUSRUTA': 46.32929437, 'KAUTILYA': 181.0406272, 'VYASA': 61.29722024, 'BRAHMAGUPTA': 148.9665004, 'VARAHAMIHIRA': 95.50962224, 'RAMANUJA': 175.3385602, 'KAPILA': 16.39344262 } },
    ]

const LEADERBOARD =
    [
        { 'SPORTS': { 'ARYABHATTA': 144.7811448, 'BHASKARA': 114.2376142, 'MAITREYI': 82.61183261, 'GARGI': 158.3694084, 'CHARAKA': 263.7842126, 'SUSRUTA': 88.45696152, 'KAUTILYA': 60.6902023, 'VYASA': 121.7770726, 'BRAHMAGUPTA': 119.3970647, 'VARAHAMIHIRA': 160.0555335, 'RAMANUJA': 133.0821103, 'KAPILA': 52.75684252 } },
        { 'CULTY': { 'ARYABHATTA': 90.35565524, 'BHASKARA': 76.89842999, 'MAITREYI': 63.76161487, 'GARGI': 162.1275232, 'CHARAKA': 94.84139699, 'SUSRUTA': 104.1332906, 'KAUTILYA': 38.76962512, 'VYASA': 25.95322012, 'BRAHMAGUPTA': 49.02274912, 'VARAHAMIHIRA': 78.82089074, 'RAMANUJA': 160.2050625, 'KAPILA': 55.11054149 } },
        { 'TECHY': { 'ARYABHATTA': 10.69137562, 'BHASKARA': 23.52102637, 'MAITREYI': 15.68068425, 'GARGI': 74.12687099, 'CHARAKA': 151.1047755, 'SUSRUTA': 46.32929437, 'KAUTILYA': 181.0406272, 'VYASA': 61.29722024, 'BRAHMAGUPTA': 148.9665004, 'VARAHAMIHIRA': 95.50962224, 'RAMANUJA': 175.3385602, 'KAPILA': 16.39344262 } },
        { 'TOTAL': { 'ARYABHATTA': 245.8281756, 'BHASKARA': 214.6570706, 'MAITREYI': 162.0541317, 'GARGI': 394.6238026, 'CHARAKA': 509.7303851, 'SUSRUTA': 238.9195465, 'KAUTILYA': 280.5004546, 'VYASA': 209.027513, 'BRAHMAGUPTA': 317.3863141, 'VARAHAMIHIRA': 334.3860465, 'RAMANUJA': 468.625733, 'KAPILA': 124.2608266 } }
    ]

export default {
    SPORTS_BOYS: SPORTS_BOYS,
    SPORTS_GIRLS: SPORTS_GIRLS,
    CULTI: CULTI,
    TECHY: TECHY,
    LEADERBOARD: LEADERBOARD
}

