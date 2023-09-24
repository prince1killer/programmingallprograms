<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Enter the value 1=<asp:TextBox ID="TextBox1" runat="server" OnTextChanged="TextBox1_TextChanged"></asp:TextBox><br/>
            Enter the value 2=<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br/>
            <asp:Button ID="Button1" runat="server"  Text="Addition" />
            <asp:Button ID="Button2" runat="server" Text="division" OnClick="Button2_Click" />
            <asp:Button ID="Button3" runat="server" Text="decimal" OnClick="Button3_Click" />
            <asp:Button ID="Button4" runat="server" Text="multiple" OnClick="Button4_Click" />
            
            <br/>
            Answer= <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>

        </div>
    </form>
</body>
</html>
