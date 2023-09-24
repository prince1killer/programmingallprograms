<%@ Page Title="" Language="C#" MasterPageFile="~/userauth.master" AutoEventWireup="true" CodeFile="ForgetPassword.aspx.cs" Inherits="ForgetPassword" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    
    <div class="container my-card">
        <div class="auth-card">
            <h2 class="text-center">Forget Here...</h2>


            <div class="input-group mb-3">
            <asp:TextBox ID="TextBox1" placeholder="Email" CssClass="form-control" runat="server"></asp:TextBox>
            </div>   
            
            <div class="input-group mb-3">
            <asp:Button ID="Button1" OnClick="Button1_Click"  runat="server" CssClass="btn" Text="Button" />
            </div>
           
        

            
            <p class="text-center">
Already have an account?<a href="Login.aspx"> Sign in</a></p>

        </div>
    </div>

</asp:Content>

