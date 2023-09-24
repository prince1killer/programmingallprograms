<%@ Page Language="C#" AutoEventWireup="true" CodeFile="singin.aspx.cs" Inherits="signin_singin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      
     <link rel="stylesheet" href="signup.css"/>  
</head>
<body>
     <div class="main">
        <div id="side-bar">
            <div class="logo"> 
                <i class="fa-solid fa-face-laugh-wink"></i>Shop
            </div>
            <div class="side-bar-content">
                <div class="s-content dashboad">
                    <span>
                        <i class="fa-brands fa-screenpal"></i>Dashboad
                    </span>
                </div>
                <div class="s-content util">
                    <label>INTERFACE</label><br/>
                    <span>
                        <i class="fa-solid fa-screwdriver-wrench"></i>Utilities
                    </span>
                </div>
                <div class="s-content pages">
                    <label>ADDON</label><br/>
                    <span>
                       <i class="fa-solid fa-folder"></i>Pages
                    </span>
                </div>
            </div>
        </div>
            <form class="content" id="form1" runat="server">
                <div>
                    <div class="box">
                        <div class="box-title"> Login </div>
                        <div class="box-content">

                            <p>Username=<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox></p>
                            <p>password=<asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox></p>
                            <p>
                                <asp:Button ID="Button1" runat="server" Text="Sign up" OnClick="Button1_Click1" /></p>
                            <p>
                                <asp:Label ID="Label1" runat="server" Text=""></asp:Label>

                            </p>
                        </div>
                    </div>

                </div>
            </form>
         </div>
</body>
</html>
