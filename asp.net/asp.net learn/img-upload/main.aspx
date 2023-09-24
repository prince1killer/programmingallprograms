<%@ Page Language="C#" AutoEventWireup="true" CodeFile="main.aspx.cs" Inherits="main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Enter the product name = <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br />
            Enter the product price = <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br />
            upload you image<br />
            <asp:FileUpload ID="FileUpload1" runat="server" /><br />
            <asp:Button ID="Button1" runat="server" Text="submit" OnClick="Button1_Click" /><br />
            <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label><br />
            <asp:Image ID="Image1" runat="server" /><br />
            From database<br />
            <asp:Image ID="Image2" runat="server" />
        </div>
    </form>
</body>
</html>
