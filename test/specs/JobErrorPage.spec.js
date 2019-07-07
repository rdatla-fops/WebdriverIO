
import jobList from '../pageobjects/jobList.page';
import errorPage from '../pageobjects/errorPage.page';
var expect = require('chai').expect;


describe(' WHEN: User tries to navigate to non-existing page like "localhost:3333/foo"', function() {
  it('THEN: Error Page should load with -> 404 Error code, Error Message, GoBackToHomePage button', function () {

   // navigating to foo page which is not existed
    errorPage.open_Page();                   
    errorPage.waitFor_Header_logo_ToLoad();
   
    // ************ Different types of BDD Style Assertions ***************************    

    errorPage.get_ErrorCode_Text_From_UI().should.equal('404');    
    errorPage.get_ErrorCode_Text_From_UI().should.be.a('string');
    errorPage.get_ErrorCode_Text_From_UI().should.have.lengthOf(3); // verfying returned error code string length
    expect(errorPage.get_ErrorCode_Text_From_UI()).to.be.equal('404');

    expect(errorPage.get_ErrorMessage_Text_From_UI()).to.be.equal('Sorry, this url is not pointing anywhere');
    errorPage.get_ErrorMessage_Text_From_UI().should.be.a('string');
    

    errorPage.click_on_GoBackToHomePage_Button();
    jobList.waitFor_Header_logo_ToLoad();

    //********* After clicking on "GO BACK TO HOME PAGE" button,Again verfying JobList page is displayed or not? *******
    jobList.get_Welcome_Msg_text().should.equal('Welcome To Job Fabrik');

  });
});