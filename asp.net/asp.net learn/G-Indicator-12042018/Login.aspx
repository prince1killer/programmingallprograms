<%@ Page Title="" Language="C#" MasterPageFile="~/Comon.master" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <style>
        .reg {
            cursor: pointer;
            margin: 10px 0px;
            display: block;
        }

            .reg:hover {
                color: white;
            }

            .reg i {
                margin-right: 5px;
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h3>Login Here </h3>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="col-md-offset-3 col-md-6">
        <div class="myform">
            <div id="alert_placeholder">
            </div>
            <div class="form-group">
                <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your name." placeholder="Username"></asp:TextBox>
                <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
                <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your name." placeholder="Password" TextMode="Password"> </asp:TextBox>
                <p class="help-block text-danger"></p>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <asp:HyperLink ID="forgot" runat="server" CssClass="btn forgot" NavigateUrl="~/Forgot.aspx">Forgot Password</asp:HyperLink>
                </div>
                <div class="col-md-6 text-right">
                    <asp:Button ID="Button1" runat="server" Text="Login" CssClass="btn btn-primary btn-block" OnClick="Button1_Click" />
                </div>

            </div>

            <div class="row">

                <div class="col-md-6">
                    <asp:HyperLink ID="HyperLink1" runat="server" CssClass="reg" NavigateUrl="~/Register.aspx"><i class="fa fa-pencil-square-o"></i>New User? Sign Up Here</asp:HyperLink>
                </div>
                <div class="col-md-6 text-right">
                    <asp:HyperLink ID="HyperLink2" runat="server" CssClass="reg" NavigateUrl="~/Admin/Login.aspx"><i class="fa fa-pencil-square-o"></i>Admin Login</asp:HyperLink>
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

