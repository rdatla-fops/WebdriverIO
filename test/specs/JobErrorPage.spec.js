
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
    errorPage.get_ErrorCode_Text_From_UI().should.have.lengthOf(3);
    expect(errorPage.get_ErrorCode_Text_From_UI()).to.be.equal('404');

    expect(errorPage.get_ErrorMessage_Text_From_UI()).to.be.equal('Sorry, this url is not pointing anywhere');

    errorPage.get_ErrorMessage_Text_From_UI().should.be.a('string');
    
    // ************ Assertions END ***************************   

    errorPage.click_on_GoBackToHomePage_Button();
    jobList.waitFor_Header_logo_ToLoad();
  });
});