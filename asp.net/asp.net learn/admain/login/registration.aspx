<%@ Page Language="C#" AutoEventWireup="true" CodeFile="registration.aspx.cs" Inherits="login_registration" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../main.css"/>  
    <link rel="stylesheet" href="registration.css" />
</head>
<body>
    <div class="main">
        <div id="side-bar">
            <div class="logo">
                <i class="fa-solid fa-snowflake"></i> Shop
            </div>
            <div class="side-bar-content">
                <div class="s-content dashboad">
                    <span>
                        <i class="fa-brands fa-screenpal"></i>Dashboad
                    </span>
                </div>
                <div class="s-content util">
                    <label>INTERFACE</label><br />
                    <span>
                        <i class="fa-solid fa-screwdriver-wrench"></i>Utilities
                    </span>
                </div>
                <div class="s-content pages">
                    <label>ADDON</label><br />
                    <span>
                        <i class="fa-solid fa-folder"></i>Pages
                    </span>
                </div>
            </div>
        </div>
        <div class="content">
            <!-- =========================== NAV =============================-->
            <nav>
                <div class="search">
                    <input type="search" runat="server" placeholder="serch here..." />
                    <div><i class="fa-solid fa-magnifying-glass"></i></div>
                </div>
                <div class="nav-right">
                    <div class="share">
                        <i class="fa-solid fa-bell"></i>
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="profile">
                        <label>name</label><div class="profile-icon"></div>
                    </div>
                </div>
            </nav>
            <!--=============================== content work================================ -->
            <div class="title">
                <span>Profile</span>
                
            </div>
            <form id="Registration" runat="server">
                <div class="work">
                    Enter your first name <br /> <asp:TextBox ID="fname" runat="server" ></asp:TextBox><br />
                    Enter your last name <br /> <asp:TextBox ID="lname" runat="server"></asp:TextBox><br />
                    Choose your photo <asp:FileUpload ID="FileUpload1" runat="server" OnLoad="FileUpload1_Load" /><asp:Image ID="Image1" runat="server" Width="120px" Height="150px" AlternateText="Your image" /><br />
                    Enter your username<br />  <asp:TextBox ID="uname" runat="server"></asp:TextBox><br />
                    Enter your Email<br />  <asp:TextBox ID="emailid" runat="server" TextMode="Email"></asp:TextBox><br />
                    Enter your password<br />  <asp:TextBox ID="pass1" runat="server" TextMode="Password"></asp:TextBox><br />
                    Re-enter password<br /><asp:TextBox ID="pass2" runat="server" TextMode="Password"></asp:TextBox><br />
                    <asp:Button ID="btn" runat="server" Text="Button" OnClick="btn_Click" /><br />
                    <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>


                </div>
            </form>
        </div>
    </div>

</body>
</html>
