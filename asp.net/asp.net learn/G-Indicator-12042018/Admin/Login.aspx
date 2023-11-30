<%@ page language="C#" autoeventwireup="true" inherits="Admin_Login, App_Web_12vub0wy" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../bootstrap/css/bootstrap.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4">
                    <div class="panel panel-danger" style="margin-top:100px;">
                        <div class="panel-heading">
                            <h3 style="margin:0;">Login </h3>
                        </div>
                        <div class="panel-body">
                            <div class="form-group">
                                <label>Username</label>
                                <asp:TextBox runat="server" ID="txtUserName" CssClass="form-control" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <asp:TextBox runat="server" ID="txtPassword" TextMode="Password" CssClass="form-control" />
                            </div>
                        </div>
                        <div class="panel-footer">
                            <asp:Button Text="Login" CssClass="btn btn-danger btn-block" ID="btnLogin" runat="server" OnClick="btnLogin_Click" />
                            <a href="../Default.aspx" class="btn btn-block btn-success">Go TO Home</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </form>
</body>
</html>
