<%@ page title="" language="C#" masterpagefile="~/user/userMaster.master" autoeventwireup="true" inherits="user_userContact, App_Web_0y3sbzug" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div id="contactForm">
        <div id="alert_placeholder">
        </div>
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <div class="myform">

                    <h3>Contact</h3>
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="form-group">
                            <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."></asp:TextBox>

                            <p class="help-block text-danger">
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Please Enter Name" ControlToValidate="TextBox1"></asp:RequiredFieldValidator>
                            </p>
                        </div>
                        <div class="form-group">
                            <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" placeholder="Your Email *"></asp:TextBox>

                            <p class="help-block text-danger">
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Please Enter Email" ControlToValidate="TextBox2"></asp:RequiredFieldValidator>
                            </p>
                        </div>
                        <div class="form-group">
                            <asp:TextBox ID="TextBox3" runat="server" CssClass="form-control" placeholder="Your Phone *"></asp:TextBox>
                            <p class="help-block text-danger">
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Please Enter Your phone number" ControlToValidate="TextBox3"></asp:RequiredFieldValidator>
                            </p>
                        </div>
                        <div class="form-group">
                            <asp:TextBox ID="TextBox4" runat="server" CssClass="form-control" placeholder="Your Message *" TextMode="MultiLine" Rows="5"></asp:TextBox>
                            <p class="help-block text-danger">
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="Please Enter Message" ControlToValidate="TextBox4"></asp:RequiredFieldValidator>
                            </p>
                        </div>
                        <div class="row">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6 text-right">
                                    <asp:Button ID="Button2" runat="server" Text="Send Message" CssClass="btn btn-primary btn-block" OnClick="Button1_Click" />
                                </div>

                            </div>
                    </div>
                    
                    <div class="clearfix"></div>
                    
                    
                </div>
                    </div>
            </div>
        </div>
    </div>
     <script src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript">
            function showalert(message, alerttype) {
                $('#alert_placeholder').append('<div id="alertdiv" class="alert ' + alerttype + ' fade in"><a class="close" data-dismiss="alert">×</a><span class="text-center">' + message + '</span></div>')
                setTimeout(function () {
                    $("#alertdiv").remove();
                }, 5000);
            }
        </script>
</asp:Content>

