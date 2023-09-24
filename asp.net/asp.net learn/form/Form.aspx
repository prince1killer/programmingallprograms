<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Form.aspx.cs" Inherits="Form" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Enter your name =<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br/>
            Enter your userName =<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br/>
            Enter your Email =<asp:TextBox ID="TextBox3" runat="server" OnTextChanged="TextBox3_TextChanged" TextMode="Email"></asp:TextBox><br/>
            Enter your password=<asp:TextBox ID="TextBox4" runat="server" TextMode="Password"></asp:TextBox><br/>
            select your gender=<asp:RadioButton ID="RadioButton1" runat="server" Text="Male" /><asp:RadioButton ID="RadioButton2" runat="server" Text="Female" /><br/>
            <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click" /><br/>
            <asp:Button ID="Button2" runat="server" Text="show" OnClick="Button2_Click" /><br/>
            Search <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
            <asp:Button ID="Button3" runat="server" Text="Search" OnClick="Button3_Click" />
            <br/>


            <asp:GridView ID="GridView1" runat="server"></asp:GridView>


        </div>
    </form>
</body>
</html>
