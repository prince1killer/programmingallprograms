<%@ Page Language="C#" AutoEventWireup="true" CodeFile="allfont.aspx.cs" Inherits="allfont" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
            <div>
                Enter the name=<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br/>
            Enter the email=<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br/>
            Enter the password=<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br/>
            Re-Enter password=<asp:TextBox ID="TextBox4" runat="server"></asp:TextBox><br/>
            <asp:DropDownList ID="DropDownList1" runat="server">
                <asp:ListItem>Day</asp:ListItem>
                <asp:ListItem>1</asp:ListItem>
                <asp:ListItem>2</asp:ListItem>
                <asp:ListItem>3</asp:ListItem>
            </asp:DropDownList>
            <asp:DropDownList ID="DropDownList2" runat="server">
                <asp:ListItem>Month</asp:ListItem>
                <asp:ListItem>Jan</asp:ListItem>
                <asp:ListItem>Feb</asp:ListItem>
                <asp:ListItem>Mar</asp:ListItem>
            </asp:DropDownList>
            <asp:DropDownList ID="DropDownList3" runat="server">
                <asp:ListItem>Year</asp:ListItem>
                <asp:ListItem>2000</asp:ListItem>
                <asp:ListItem>2001</asp:ListItem>
                <asp:ListItem>2002</asp:ListItem>
                <asp:ListItem>2003</asp:ListItem>
            </asp:DropDownList><br/>
            <asp:Button ID="Button1" runat="server" Text="submit" OnClick="Button1_Click" /><br />
            search = <asp:TextBox ID="TextBox5" runat="server" TextMode="Number" MaxLength="30"></asp:TextBox>
                <asp:Button ID="Button2" runat="server" Text="search" OnClick="Button2_Click" /><br />
                <asp:Button ID="Button3" runat="server" Text="edit" OnClick="Button3_Click" /><br />
                <asp:Button ID="Edit" runat="server" Text="update" OnClick="Edit_Click" /><br />
                <asp:Button ID="Button4" runat="server" Text="delete" OnClick="Button4_Click" /><br />
                <asp:GridView ID="GridView1" runat="server"></asp:GridView>
        </div>
    </form>
</body>
</html>
