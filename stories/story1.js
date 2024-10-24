export { prepareStory1 };

function prepareStory1({ Activity }) {
  return {
    runThrough() {
      const workOnOldReposActivity = new Activity('Work on old repos', '30 min', 7);
      const swingExercisesActivity = new Activity('Swing exercises', '150 swings', 3);
      const drinkWaterActivity = new Activity('Drink water', '1 liter', 4);
      const rodaActivity = new Activity('Roda', '30 iterations', 3);
      const energizingTappingActivity = new Activity('Energizing tapping', '1 min', 1);
      const watchRaduActivity = new Activity('Watch Radu', '20 min', 2);
      const pullUpsActivity = new Activity('Pull-ups', '2 sequences', 1);
      const deepRelaxationActivity = new Activity('Deep relaxation', '10 min', 4);
      const hamstringsStretchActivity = new Activity('Hamstrings stretch', '2 min', 1);
      const abstentionActivity = new Activity('Abstention', 'day', 10);
      const freeCodeCampActivity = new Activity('FreeCodeCamp', '30 min', 3);
      const nauliActivity = new Activity('Nauli', '3 times', 2);
    }
  }
}
