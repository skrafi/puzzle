class ScoresController {
  constructor(UserService, ScoresService) {
    this.UserService = UserService;
    this.ScoresService = ScoresService;

    this.userName = UserService.userName;
    this.scores = ScoresService.scores;
  }
  $onInit() {
    this.ScoresService.getTop10Scores();
  }
}

/* @ngInject */
export default ScoresController;
