class HomeController {
  constructor(UserService) {
    this.UserService = UserService;
    this.userName = UserService.userName;
  }
}

/* @ngInject */
export default HomeController;