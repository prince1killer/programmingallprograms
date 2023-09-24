<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Enter the name = <asp:TextBox ID="txtname" runat="server"></asp:TextBox><br/>
            Enter your Email=<input id="txtemail" runat="server" type="email" /><br/>
            Enter your password= <input id="txtpassword" runat="server" type="password" /><br/>
            Enter your phone number = <input id="txtphone" type="text" runat="server" /><br/>
            <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" /><br/>
        </div>
    </form>
</body>
</html>
