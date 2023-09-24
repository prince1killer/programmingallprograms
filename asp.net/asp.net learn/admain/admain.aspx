<%@ Page Language="C#" AutoEventWireup="true" CodeFile="admain.aspx.cs" Inherits="admain" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="main.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
        <div class="content">
            <!-- =========================== NAV =============================-->
            <nav>
                <div class="search">
                    <input type="search" runat="server" placeholder="serch here..."/>
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
                <span>Categoty List</span>
                <button>Add item</button>
            </div>
            <form id="form1" runat="server">
                <div>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
