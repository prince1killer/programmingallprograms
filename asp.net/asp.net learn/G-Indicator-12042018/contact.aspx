<%@ page title="" language="C#" masterpagefile="~/Comon.master" autoeventwireup="true" inherits="contact, App_Web_grc3h2em" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h3>Contact Us</h3>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="row">

        <div class="col-md-4">
            <div class="contactData text-center">
                <i class="fa fa-map-marker"></i>
                <address>
                    <strong>Twitter, Inc.</strong><br>
                    795 Folsom Ave, Suite 600<br>
                    San Francisco, CA 94107<br>
                    <abbr title="Phone">P:</abbr>
                    (123) 456-7890
                </address>
            </div>
        </div>

        <div class="col-md-4">
            <div class="contactData text-center">
                <i class="fa fa-link"></i>
                <address>
                    <strong>Full Name</strong><br>
                    <a href="mailto:#">first.last@example.com</a>
                </address>
            </div>
        </div>

        <div class="col-md-4">
            <div class="contactData text-center">
                <i class="fa fa-phone"></i>
                <address>
                    <abbr title="Phone">P:</abbr>
                    (123) 456-7890<br />
                    <abbr title="Phone">P:</abbr>
                    (123) 456-7890
                </address>
            </div>
        </div>

    </div>
    <!--/.row -->
    <div class="row" style="padding-top: 80px;">
        <div class="col-md-12">
            <div id="contactForm">
                <div id="alert_placeholder">
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."></asp:TextBox>

                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group">
                            <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."></asp:TextBox>

                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group">
                            <asp:TextBox ID="TextBox3" runat="server" CssClass="form-control" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."></asp:TextBox>

                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <asp:TextBox ID="TextBox4" runat="server" CssClass="form-control" placeholder="Your Message *" required="required" TextMode="MultiLine" Rows="6" data-validation-required-message="Please enter a message."></asp:TextBox>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-lg-12 text-center">
                        <div id="success"></div>
                        <asp:Button ID="Button1" runat="server" Text="Send Message" CssClass="btn btn-primary " OnClick="Button1_Click" />
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
    </div>
</asp:Content>

