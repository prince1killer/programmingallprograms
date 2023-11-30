<%@ page title="" language="C#" masterpagefile="~/user/userMaster.master" autoeventwireup="true" inherits="user_Userchangepassword, App_Web_0y3sbzug" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <div class="myform">

                    <h3>Change Password</h3>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">

                            <div id="alert_placeholder">
                            </div>

                            <div class="form-group">
                                <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter password." placeholder="New Password" TextMode="Password"></asp:TextBox>
                                <p class="help-block text-danger"></p>
                            </div>

                            <div class="form-group">
                                <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter confirm password." placeholder="Confirm Password" TextMode="Password"></asp:TextBox>
                                <p class="help-block text-danger"></p>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6 text-right">
                                    <asp:Button ID="Button1" runat="server" Text="Change Password" CssClass="btn btn-primary btn-block" OnClick="Button1_Click" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>

