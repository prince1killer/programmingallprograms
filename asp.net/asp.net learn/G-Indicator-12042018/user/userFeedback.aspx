<%@ page title="" language="C#" masterpagefile="~/user/userMaster.master" autoeventwireup="true" inherits="user_userFeedback, App_Web_0y3sbzug" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <div class="myform">

                    <h3>Feedback</h3>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">

                            <div id="alert_placeholder">
                            </div>

                            <div class="form-group">
                                <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter Name." placeholder="New Name"></asp:TextBox>
                                <p class="help-block text-danger"></p>
                            </div>

                            <div class="form-group">
                                <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter Message." placeholder="Message" TextMode="MultiLine" Rows="5"></asp:TextBox>
                                <p class="help-block text-danger"></p>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6 text-right">
                                    <asp:Button ID="Button1" runat="server" Text="Send" CssClass="btn btn-primary btn-block" OnClick="Button1_Click" />
                                </div>

                            </div>
                        </div>
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

