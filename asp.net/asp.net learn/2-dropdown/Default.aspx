<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:DropDownList ID="DropDownList1" runat="server" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
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
            <asp:DropDownList ID="DropDownList2" runat="server">
                <asp:ListItem>Jan</asp:ListItem>
                <asp:ListItem>Feb</asp:ListItem>
                <asp:ListItem>Apr</asp:ListItem>
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
                <asp:ListItem>2001</asp:ListItem>
                <asp:ListItem>2002</asp:ListItem>
                <asp:ListItem>2003</asp:ListItem>
                <asp:ListItem>2004</asp:ListItem>
                <asp:ListItem>2005</asp:ListItem>
            </asp:DropDownList><br />
            <asp:Button ID="Button1" runat="server" Text="Click" OnClick="Button1_Click" /><asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><asp:Button ID="Button2" runat="server" Text="clear" OnClick="Button2_Click" />

        </div>
        <div>
            <asp:Label ID="Label1" runat="server" Text="Label">Q1 5 X 2 = ?</asp:Label>
            <asp:RadioButton ID="RadioButton1" runat="server" Text="12" GroupName="12" OnCheckedChanged="RadioButton1_CheckedChanged" />
            <asp:RadioButton ID="RadioButton2" runat="server" Text="23" GroupName="12"/>
            <asp:RadioButton ID="RadioButton3" runat="server" Text="34" GroupName="12" />
            <asp:RadioButton ID="RadioButton4" runat="server" Text="10" GroupName="12"/>
            <br />
            <asp:Button ID="Button3" runat="server" Text="submit" OnClick="Button3_Click" />
            <asp:Label ID="Label2" runat="server" Text="Answer is ..."></asp:Label>
        </div>
    </form>
</body>
</html>
