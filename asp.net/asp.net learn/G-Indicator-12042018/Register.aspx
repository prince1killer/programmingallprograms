<%@ page title="" language="C#" masterpagefile="~/Comon.master" autoeventwireup="true" inherits="Register, App_Web_grc3h2em" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h3>Register Here </h3>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="col-md-12">
        <div id="alert_placeholder" >
            </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Name." placeholder="Name"></asp:TextBox>
                    <p class="help-block text-danger">

                    </p>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="TextBox3" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Username." placeholder="Username"></asp:TextBox>
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="TextBox4" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Password." placeholder="Password" TextMode="Password"></asp:TextBox>
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="TextBox5" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Confirm Password." placeholder="Confirm Password" TextMode="Password"   data-validation-matches-match="TextBox4"></asp:TextBox>
                    <p class="help-block text-danger">
                        
                    </p>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="TextBox8" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Email Id." placeholder="Email Id"></asp:TextBox>
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <asp:DropDownList ID="DropDownList1" runat="server" CssClass="form-control" >
                        <asp:ListItem>-- Select Security Questation --</asp:ListItem>
                        <asp:ListItem>Your favourite Color?</asp:ListItem>
                        <asp:ListItem>Your Pet Name?</asp:ListItem>
                        <asp:ListItem>Your School Name?</asp:ListItem>
                    </asp:DropDownList>
                   
                    <p class="help-block text-danger"></p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <asp:TextBox ID="TextBox6" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Address." placeholder="Address" TextMode="MultiLine"></asp:TextBox>
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your City." placeholder="City"></asp:TextBox>
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="TextBox7" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Contact Number." placeholder="Contact Number"></asp:TextBox>
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="TextBox9" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please Enter Security Answer" placeholder="Security Answer"></asp:TextBox>
                    <p class="help-block text-danger"></p>
                </div>

            </div>
        </div>
        <div class="row">
         
            <div class="col-lg-12 text-center">
                <asp:Button ID="Button1" runat="server" Text="Register" CssClass="btn btn-primary" OnClick="Button1_Click" />
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

