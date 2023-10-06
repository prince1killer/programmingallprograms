<%@ Page Title="" Language="C#" EnableEventValidation="false" MasterPageFile="~/Client/ClientMasterPage.master" AutoEventWireup="true" CodeFile="clientlogin.aspx.cs" Inherits="Client_clientlogin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <section id="form"><!--form-->
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-form"><!--login form-->
						<h2>Login to your account</h2>
						<div class="form">
							 <asp:TextBox ID="admineuser" runat="server" placeholder="Username"/>
                            <asp:TextBox ID="adminepass" runat="server" placeholder="Password"/>
							<span>
								<input type="checkbox" class="checkbox"/> 
								Keep me signed in
							</span>
                            <asp:Button Text="Login" ID="loginbtn" class="btn btn-default" runat="server" EnableViewState="False" OnClick="loginbtn_Click" />
						</div>
					</div><!--/login form-->
				</div>
				<div class="col-sm-1">
					<h2 class="or">OR</h2>
				</div>
				<div class="col-sm-4">
					<div class="signup-form"><!--sign up form-->
						<h2>New User Signup!</h2>
						<div class="form">
                            <asp:TextBox ID="user" runat="server" placeholder="Username"/>
                            <asp:TextBox ID="email" runat="server" placeholder="Email Address"/>
                            <asp:TextBox ID="password" runat="server" placeholder="Password"/>

                            <asp:Button Text="Signup" ID="signupbtn" class="btn btn-default" runat="server" OnClick="signupbtn_Click" />
							

						</div>
					</div><!--/sign up form-->
				</div>
			</div>
		</div>
	</section><!--/form-->
</asp:Content>

