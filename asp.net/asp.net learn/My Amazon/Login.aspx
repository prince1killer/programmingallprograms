<%@ Page Title="" Language="C#" MasterPageFile="~/userauth.master" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
      <div class="container my-card">
        <div class="auth-card">
            <h2 class="text-center">Sign-In</h2>


            <div class="input-group mb-3">
            <asp:TextBox ID="TextBox1" placeholder="Email" CssClass="form-control" runat="server"></asp:TextBox>
            </div>   
            <div class="input-group mb-3">
            <asp:TextBox ID="TextBox2" placeholder="Password" CssClass="form-control" runat="server"></asp:TextBox>
            </div>
            <div class="input-group mb-3">
            <asp:Button ID="Button1" runat="server" CssClass="btn" Text="Button" OnClick="Button1_Click" />

            </div>
            <p class="text-end">
                <a href="ForgetPassword.aspx">Forget Password </a>    
            </p>
            <p class="text-center">
                <a href="Registration.aspx">Create your Amazon account</a>    
            </p>
            



        </div>
    </div>

</asp:Content>

