<%@ Page Language="C#" AutoEventWireup="true" CodeFile="signup.aspx.cs" Inherits="signup" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>Enter the user or Email =<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br/>
            Enter the password = <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br/>
            <asp:Button ID="Button1" runat="server" Text="Login" OnClick="Button1_Click" /><br/>
            <asp:Label ID="Label1" runat="server" Text=""></asp:Label><br/>
            <asp:GridView ID="GridView1" runat="server"></asp:GridView>
            <asp:Button ID="Button2" runat="server" Text="Forgot password" OnClick="Button2_Click" />
        </div>
    </form>
</body>
</html>
