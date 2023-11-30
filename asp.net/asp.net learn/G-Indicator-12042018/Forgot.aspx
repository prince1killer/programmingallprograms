<%@ Page Title="" Language="C#" MasterPageFile="~/Comon.master" AutoEventWireup="true" CodeFile="Forgot.aspx.cs" Inherits="Forgot" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h3>Forgot Password??? </h3>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
    <div class="col-md-offset-3 col-md-6">
    <div class="form-group">
        <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your name." placeholder="Username"></asp:TextBox>
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
    <div class="form-group">
        <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your name." placeholder="Security Answer"></asp:TextBox>
        <p class="help-block text-danger"></p>
    </div>

    <div class="row">
        <div class="col-md-6">
                <asp:HyperLink ID="forgot" runat="server" CssClass="btn forgot" NavigateUrl="~/Login.aspx">Back To Login</asp:HyperLink>
        </div>
        <div class="col-md-6 text-right">
            <asp:Button ID="Button1" runat="server" Text="Change Password" CssClass="btn btn-primary btn-block" OnClick="Button1_Click" />
        </div>

    </div>
        </div>
</asp:Content>

