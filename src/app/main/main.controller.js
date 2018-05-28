export class MainController {
  constructor ($http ) {
    'ngInject';
      this.$http = $http;
      this.getMessages();
  }

  getMessages() {
    var vm = this;
    this.$http.get('http://localhost:5000/api/message').then(function(result){
        console.log(result);
        vm.messages = result.data;
    });
  }
postMessage() {
  this.$http.post('http://localhost:5000/api/message', {
    resourceType: this.resource,
    locationName: this.location,
    address: this.address,
    phone: this.phone,
   // email: this.email,
    website: this.website,
    msg:this.message
  });
}

}
