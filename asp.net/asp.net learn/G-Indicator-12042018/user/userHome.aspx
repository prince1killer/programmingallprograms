<%@ page title="" language="C#" masterpagefile="~/user/userMaster.master" autoeventwireup="true" inherits="user_userHome, App_Web_0y3sbzug" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <!-- Start Main Body Section -->
    <div class="mainbody-section text-center">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1">


                    <div class="row">

                        <div class="col-md-4">
                            <div class="menu-item color">
                                <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/user/userProfile.aspx">
                                <i class="fa fa-user"></i>
                                <p>My Profile</p>
                                </asp:HyperLink>
                            </div>


                        </div>

                        <div class="col-md-4">
                            <div class="menu-item blue">
                                <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/user/userVehicle.aspx">
                                <i class="fa fa-car"></i>
                                <p>Add Vehicle</p>
                                </asp:HyperLink>
                            </div>

                        </div>

                        <div class="col-md-4">
                            <div class="menu-item teal">
                                <asp:HyperLink ID="HyperLink8" runat="server" NavigateUrl="~/user/SearchVehicle.aspx">
                                <i class="fa fa-truck"></i>
                                <p>Search Vehicle</p>
                                </asp:HyperLink>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="menu-item light-blue">
                                <asp:HyperLink ID="HyperLink6" runat="server" NavigateUrl="~/user/userContact.aspx">
                                <i class="fa fa-envelope-o"></i>
                                <p>Contact</p>
                                </asp:HyperLink>
                            </div>

                        </div>

                        <div class="col-md-6">
                            <div class="menu-item indian-red ">
                                <asp:HyperLink ID="HyperLink7" runat="server" NavigateUrl="~/user/userFeedback.aspx">
                                <i class="fa fa-comments-o"></i>
                                <p>Feedback</p>
                                </asp:HyperLink>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>

