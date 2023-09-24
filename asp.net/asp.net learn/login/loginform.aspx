<%@ Page Language="C#" AutoEventWireup="true" CodeFile="loginform.aspx.cs" Inherits="loginform" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Enter the name = <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br/>
            Enter the user name=<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br/>
            Enter the email =<asp:TextBox ID="TextBox3" runat="server" TextMode="Email"></asp:TextBox><br/>
            Enter the password=<asp:TextBox ID="TextBox4" runat="server" TextMode="Password"></asp:TextBox><br/>
            Re-enter password=<asp:TextBox ID="TextBox5" runat="server" TextMode="Password"></asp:TextBox><br/>
            <asp:Button ID="Button3" runat="server" Text="sign in" OnClick="Button3_Click" />
            <asp:Button ID="Button1" runat="server" Text="submit" OnClick="Button1_Click" /><br/>
            <asp:Button ID="Button2" runat="server" Text="Button" OnClick="Button2_Click" /><br/>
            <asp:GridView ID="GridView1" runat="server"></asp:GridView>


        </div>
    </form>
</body>
</html>
