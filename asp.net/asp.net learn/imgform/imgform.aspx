<%@ Page Language="C#" AutoEventWireup="true" CodeFile="imgform.aspx.cs" Inherits="imgform" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="imgStyle.css"/>
</head>
<body>
    <form id="form1" runat="server">
        <div class="main">
            Enter the name =<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br/>
            Enter the userName=<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br/>
            Enter the Email = <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br/>
            Enter the password=<asp:TextBox ID="TextBox4" runat="server"></asp:TextBox><br/>
            Select your grnder= <asp:RadioButton ID="RadioButton2" runat="server" Text="Male" />
            <asp:RadioButton ID="RadioButton1" runat="server" Text="Female" /><asp:Label ID="Label2" runat="server" Text=""></asp:Label><br/>
            select your Birth date =<asp:DropDownList ID="DropDownList2" runat="server">
                <asp:ListItem>Day</asp:ListItem>
                <asp:ListItem>1</asp:ListItem>
                <asp:ListItem>2</asp:ListItem>
                <asp:ListItem>3</asp:ListItem>
                <asp:ListItem>4</asp:ListItem>
                <asp:ListItem>5</asp:ListItem>
                <asp:ListItem>6</asp:ListItem>
                <asp:ListItem>7</asp:ListItem>
                <asp:ListItem>8</asp:ListItem>
                <asp:ListItem>9</asp:ListItem>
                <asp:ListItem>10</asp:ListItem>
            </asp:DropDownList>
            <asp:DropDownList ID="DropDownList1" runat="server">
                <asp:ListItem>Month</asp:ListItem>
                <asp:ListItem>Jan</asp:ListItem>
                <asp:ListItem>Feb</asp:ListItem>
                <asp:ListItem>Mar</asp:ListItem>
                <asp:ListItem>May</asp:ListItem>
                <asp:ListItem>Jun</asp:ListItem>
                <asp:ListItem>Jul</asp:ListItem>
                <asp:ListItem>Aug</asp:ListItem>
                <asp:ListItem>Sep</asp:ListItem>
                <asp:ListItem>Oct</asp:ListItem>
                <asp:ListItem>Nov</asp:ListItem>
                <asp:ListItem>Dec</asp:ListItem>
            </asp:DropDownList>
            <asp:DropDownList ID="DropDownList3" runat="server">
                <asp:ListItem>Year</asp:ListItem>
                <asp:ListItem>2000</asp:ListItem>
                <asp:ListItem>2001</asp:ListItem>
                <asp:ListItem>2002</asp:ListItem>
                <asp:ListItem>2003</asp:ListItem>
                <asp:ListItem>2004</asp:ListItem>
                <asp:ListItem>2005</asp:ListItem>
                <asp:ListItem>2006</asp:ListItem>
            </asp:DropDownList><asp:Label ID="Label1" runat="server" Text=""></asp:Label><br/>
            <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click" />
        </div>
    </form>
</body>
</html>
