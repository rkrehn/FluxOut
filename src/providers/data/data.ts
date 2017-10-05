import { ExerciseDescription } from '../exercise-description.interface';
import { Exercise } from '../exercise.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
  constructor() {


  }

  getValues() {

    let a = this.getExercises().filter((exercise: Exercise) => {
      if (exercise.bodypart == 1 && exercise.section == 1) {
        return true;
      }
      else {
        return false;
      }
    })[0].recipe;

    let b = this.getExercises().filter((exercise: Exercise) => {
      if (exercise.bodypart == 1 && (exercise.section == 2 || exercise.section == 3)) {
        return true;
      }
      else {
        return false;
      }
    })[0].recipe;

    let c = this.getExercises().filter((exercise: Exercise) => {
      if (exercise.bodypart == 2 && exercise.section == 1) {
        return true;
      }
      else {
        return false;
      }
    })[0].recipe;

    let d = this.getExercises().filter((exercise: Exercise) => {
      if (exercise.bodypart == 2 && exercise.section == 2) {
        return true;
      }
      else {
        return false;
      }
    })[0].recipe;

    let e = this.getExercises().filter((exercise: Exercise) => {
      if (exercise.bodypart == 3 && exercise.section == 1) {
        return true;
      }
      else {
        return false;
      }
    })[0].recipe;

    let f = this.getExercises().filter((exercise: Exercise) => {
      if (exercise.bodypart == 4 && (exercise.section == 1 || exercise.section == 2 || exercise.section == 4)) {
        return true;
      }
      else {
        return false;
      }
    })[0].recipe;

    let g = this.getExercises().filter((exercise: Exercise) => {
      if (exercise.bodypart == 4 && (exercise.section == 3 || exercise.section == 5)) {
        return true;
      }
      else {
        return false;
      }
    })[0].recipe;

    let h = this.getExercises()[0].recipe;


    let val = this.shuffle([a, b, c, d, e, f, g, h]);

    let values = [];

    for (let i = 0; i < val.length; i++) {
      let tmp = this.getExercises().filter((exercise: Exercise) => {
        if (exercise.recipe == val[i]) {

          return true;
        }
        else {
          return false;
        }
      });
      values.push({
        gif: '/assets/gifs/' + tmp[0].gif + '.webm',
        description: tmp[0].description
        });
    }
    return values;
  }
  shuffle(array) {
    var tmp, current, top = array.length;

    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }

    return array;
  }

  getExercises() {
    return this.shuffle([
      {
        "bodypart":
        1,
        "section": 1,
        "description": 'Uppercut With Dumbbells',
        "gif": 'GoldenAngryAkitainu',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 1
      },
      {
        "bodypart":
        1,
        "section": 1,
        "description": 'Curl To Shoulder Press With EZ Bar',
        "gif": 'TepidRashHylaeosaurus',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 2
      },
      {
        "bodypart":
        1,
        "section": 1,
        "description": 'Lateral Biceps-Curl',
        "gif": 'VapidPlayfulFrilledlizard',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 3
      },
      {
        "bodypart":
        1,
        "section": 2,
        "description": 'Incline Bench Press With Dumbbells',
        "gif": 'RepentantDizzyChupacabra',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 4
      },
      {
        "bodypart":
        1,
        "section": 2,
        "description": 'Rolling Triceps Extension',
        "gif": 'CalculatingDeepFruitfly',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 5
      },
      {
        "bodypart":
        1,
        "section": 3,
        "description": 'Sit Outs',
        "gif": 'AncientBlondGroundbeetle',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 6
      },
      {
        "bodypart":
        1,
        "section": 3,
        "description": 'Rollout On Knees',
        "gif": 'BlindSlightGalapagoshawk',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 7
      },
      {
        "bodypart":
        2,
        "section": 1,
        "description": 'Straight Arm Plank With Alternating Arm And Leg Raise',
        "gif": 'RigidIncredibleKoalabear',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 8
      },
      {
        "bodypart":
        2,
        "section": 2,
        "description": 'Dragon Flag',
        "gif": 'EthicalTestyArrowworm',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 9
      },
      {
        "bodypart":
        2,
        "section": 1,
        "description": 'Crunches',
        "gif": 'HelpfulWellgroomedDoctorfish',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 10
      },
      {
        "bodypart":
        2,
        "section": 2,
        "description": 'Overhead Side Bend',
        "gif": 'FirsthandHalfHapuka',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 11
      },
      {
        "bodypart":
        2,
        "section": 2,
        "description": 'Side Mountain Climbers',
        "gif": 'DisfiguredAllGreatargus',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 12
      },
      {
        "bodypart":
        3,
        "section": 1,
        "description": 'Overhand Grip',
        "gif": 'LeadingEnchantedErin',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 13
      },
      {
        "bodypart":
        3,
        "section": 1,
        "description": 'Underhand Grip',
        "gif": 'FlamboyantPortlyKronosaurus',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 14
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'Goblet Squat',
        "gif": 'LonelySnappyDoctorfish',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 15
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'Squat and row',
        "gif": 'JovialDistinctAustraliancattledog',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 16
      },
      {
        "bodypart": 4,
        "section": 2,
        "description": 'Deadlift, Snatch Grip',
        "gif": 'CircularDescriptiveAfricangoldencat',
        "dumbbell": 1,
        "pullupbar": 1,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 17
      },
      {
        "bodypart":
        4,
        "section": 2,
        "description": 'Leg Curl With Dumbbell',
        "gif": 'RespectfulForcefulImperatorangel',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 18
      },
      {
        "bodypart":
        4,
        "section": 3,
        "description": 'Calf Raise',
        "gif": 'KeenLinedEquine',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 1,
        "ball": 0,
        "recipe": 19
      },
      {
        "bodypart":
        4,
        "section": 3,
        "description": 'Box Jump',
        "gif": 'HardCommonAlbatross',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 20
      },
      {
        "bodypart":
        4,
        "section": 5,
        "description": 'Globe Jumps',
        "gif": 'NarrowUnconsciousGreatdane',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 21
      },
      {
        "bodypart":
        4,
        "section": 5,
        "description": 'Sumo Squat With Dumbbell',
        "gif": 'VillainousGrouchyAnt',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 22
      },
      {
        "bodypart":
        1,
        "section": 1,
        "description": 'Rotating Bicep Curl',
        "gif": 'BestUnknownAustraliancurlew',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 23
      },
      {
        "bodypart":
        1,
        "section": 1,
        "description": 'Concentration Curl',
        "gif": 'BonyWhirlwindBettong',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 24
      },
      {
        "bodypart":
        1,
        "section": 1,
        "description": 'Front Raise Curl',
        "gif": 'TightUnkemptCanary',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 25
      },
      {
        "bodypart":
        1,
        "section": 2,
        "description": 'Triceps Kickback',
        "gif": 'WeeGregariousGreatwhiteshark',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 26
      },
      {
        "bodypart":
        1,
        "section": 2,
        "description": 'Cross-Body Triceps Extension',
        "gif": 'LoneNextCockatiel',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 27
      },
      {
        "bodypart":
        1,
        "section": 2,
        "description": 'Renegade Row',
        "gif": 'UnfitTastyFantail',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 28
      },
      {
        "bodypart":
        2,
        "section": 1,
        "description": 'Jack Knife Crunch',
        "gif": 'FairSparklingGalapagosdove',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 29
      },
      {
        "bodypart":
        2,
        "section": 1,
        "description": 'Leg Raises',
        "gif": 'SpitefulWhoppingLiger',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 30
      },
      {
        "bodypart":
        2,
        "section": 1,
        "description": 'L-Seat',
        "gif": 'FocusedEducatedIvorygull',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 31
      },
      {
        "bodypart":
        2,
        "section": 1,
        "description": 'Sliding Towel Pike',
        "gif": 'MindlessDeafeningBlobfish',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 32
      },
      {
        "bodypart":
        2,
        "section": 2,
        "description": 'Bicycle',
        "gif": 'TanBoilingAustraliancurlew',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 33
      },
      {
        "bodypart":
        2,
        "section": 2,
        "description": 'Side Star Plank',
        "gif": 'OldSarcasticFerret',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 34
      },
      {
        "bodypart":
        2,
        "section": 2,
        "description": 'Scorpion Push-Up',
        "gif": 'AgedAgedBluegill',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 35
      },
      {
        "bodypart":
        2,
        "section": 2,
        "description": 'Weighted Russian Twist',
        "gif": 'FirstEvenFlea',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 36
      },
      {
        "bodypart":
        3,
        "section": 1,
        "description": 'Horizontal Fly',
        "gif": 'PhonyLivelyCricket',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 37
      },
      {
        "bodypart":
        3,
        "section": 1,
        "description": 'Dead Lift',
        "gif": 'KeyObviousFrogmouth',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 38
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'Side Step-Up',
        "gif": 'DefiniteBriefIntermediateegret',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 39
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'Wall Squat',
        "gif": 'ActualVillainousGecko',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 40
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'Reverse Lunge',
        "gif": 'FoolhardyInfatuatedDunlin',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 41
      },
      {
        "bodypart":
        4,
        "section": 2,
        "description": 'Hip Thrust',
        "gif": 'WillingConsciousGander',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 42
      },
      {
        "bodypart":
        4,
        "section": 2,
        "description": 'Overhead Squat',
        "gif": 'TenderDismalEidolonhelvum',
        "dumbbell": 1,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 43
      },
      {
        "bodypart":
        4,
        "section": 2,
        "description": 'Deck Squat',
        "gif": 'GentleDefinitiveBlueandgoldmackaw',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 44
      },
      {
        "bodypart":
        4,
        "section": 4,
        "description": 'Globe Jumps',
        "gif": 'SpiritedImpureHuemul',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 45
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'Pistol Squat',
        "gif": 'IdenticalPassionateFruitbat',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 46
      },
      {
        "bodypart":
        4,
        "section": 2,
        "description": 'Squat Jump',
        "gif": 'BoldDampChinesecrocodilelizard',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 47
      },
      {
        "bodypart":
        4,
        "section": 5,
        "description": 'Duck Unders',
        "gif": 'BronzeNaiveKoalabear',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 48
      },
      {
        "bodypart":
        4,
        "section": 4,
        "description": 'Frog Squats',
        "gif": 'DeadlyNarrowDairycow',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 49
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'Squat Jacks',
        "gif": 'SarcasticTerrificCrustacean',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 50
      },
      {
        "bodypart":
        4,
        "section": 4,
        "description": 'Heel Beats',
        "gif": 'AcidicMemorableGrackle',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 51
      },
      {
        "bodypart":
        4,
        "section": 3,
        "description": 'Calf Raise',
        "gif": 'GranularAdolescentChimneyswift',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 52
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'Lunge Split Jump',
        "gif": 'ShockingSmoggyCapeghostfrog',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 53
      },
      {
        "bodypart":
        4,
        "section": 3,
        "description": 'Star Jump',
        "gif": 'MistyCavernousAmericanblackvulture',
        "dumbbell": 0,
        "pullupbar": 0,
        "bench": 0,
        "barbell": 0,
        "ball": 0,
        "recipe": 54
      },
    ]);




  }
  getExerciseDescription() {
    return [
      {
        "bodypart": 1,
        "section": 1,
        "description": 'arm-biceps',
        "recipe": 1
      },
      {
        "bodypart":
        2,
        "section": 1,
        "description": 'abs - Rectus abdominis',
        "recipe": 4
      },
      {
        "bodypart":
        1,
        "section": 2,
        "description": 'arm-triceps',
        "recipe": 2
      },
      {
        "bodypart":
        2,
        "section": 2,
        "description": 'abs - obliques',
        "recipe": 5
      },
      {
        "bodypart":
        3,
        "section": 1,
        "description": 'back',
        "recipe": 6
      },
      {
        "bodypart":
        4,
        "section": 1,
        "description": 'legs - quadriceps',
        "recipe": 7
      },
      {
        "bodypart":
        4,
        "section": 2,
        "description": 'legs - hamstrings',
        "recipe": 8
      },
      {
        "bodypart":
        4,
        "section": 3,
        "description": 'legs - calves',
        "recipe": 9
      },
      {
        "bodypart":
        4,
        "section": 4,
        "description": 'legs - glutes',
        "recipe": 10
      },
      {
        "bodypart":
        4,
        "section": 5,
        "description": 'legs - abductors',
        "recipe": 11
      },
      {
        "bodypart":
        1,
        "section": 3,
        "description": 'arms - deltoids',
        "recipe": 12
      },
    ]
  }
}
