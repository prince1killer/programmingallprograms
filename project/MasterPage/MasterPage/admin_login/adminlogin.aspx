<%@ Page Language="C#" AutoEventWireup="true" CodeFile="adminlogin.aspx.cs" Inherits="adminlogin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="StyleSheet.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
    
        <div class="admin_login">
    
            <div class="admin_img">
                <img src="admin-user-icon-18.jpg" alt="Alternate Text" />
            </div>

            <asp:TextBox runat="server" ID="txtuser" class="same" placeholder="Username"></asp:TextBox>
            <asp:TextBox runat="server"  ID="txtpassword" class="same" placeholder="Password"></asp:TextBox>
            <asp:Button Text="Login" runat="server" ID="loginbtn" class="admin_btn" OnClick="loginbtn_Click" />
            
            <%--<input type="text" name="Username" id="txtuser" class="same" placeholder="Username"/>--%>
            <%--<input type="text" name="Password" id="txtpassword" class="same" placeholder="Password"/>--%>
            <%--<input type="submit" value="Login" id="loginbtn" class="admin_btn" />--%>

            <a href="#" id="forgot">Forgot Password?</a>
            <a href="#" id="create">Create an account?</a>


        </div>

    </form>
</body>
</html>
