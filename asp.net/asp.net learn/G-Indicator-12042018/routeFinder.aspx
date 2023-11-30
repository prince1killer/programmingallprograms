<%@ page title="" language="C#" masterpagefile="~/Main.master" autoeventwireup="true" inherits="routeFinder, App_Web_grc3h2em" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="row">
        <asp:Panel ID="PanelBus" runat="server">
            <div class="col-md-6">
                <div class="form-group">
                    <asp:DropDownList ID="DropDownList1" runat="server" CssClass="form-control" required="required"
                        data-validation-required-message="Please enter your name." AutoPostBack="True"
                        OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
                    </asp:DropDownList>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <asp:DropDownList ID="DropDownList2" runat="server" CssClass="form-control" required="required"
                        data-validation-required-message="Please enter your Name">
                        <asp:ListItem Value="0">--Select Destination--</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="PanelPrivate" runat="server">
            <div class="col-sm-3 col-xs-12">
                <div class="form-group">
                    <asp:DropDownList ID="DropVehicleType" runat="server" CssClass="form-control" AutoPostBack="True"
                        OnSelectedIndexChanged="DropVehicleType_SelectedIndexChanged">
                    </asp:DropDownList>
                </div>
            </div>
            <div class="col-sm-3 col-xs-12">
                <div class="form-group">
                    <asp:DropDownList ID="dropSourceCity" AutoPostBack="True" OnSelectedIndexChanged="dropSourceCity_SelectedIndexChanged"
                        runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Name">
                        <asp:ListItem Value="0">--Select Source--</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>
            <div class="col-sm-3 col-xs-12">
                <div class="form-group">
                    <asp:DropDownList ID="dropDestCity" runat="server" CssClass="form-control" required="required"
                        data-validation-required-message="Please enter your Name">
                        <asp:ListItem Value="0">--Select Destination--</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>
            <div class="col-md-3 col-xs-12">
                <div class="form-group">
                    <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Enter Area">
                    </asp:TextBox>
                </div>
            </div>
        </asp:Panel>
        <div class="clearfix">
        </div>
        <div class="col-lg-12 text-center">
            <div id="success">
            </div>
            <%-- <asp:Button ID="Button1" runat="server" Text="Show My Route" CssClass="btn btn-primary " OnClick="Button1_Click" />--%>
            <asp:Button ID="Button2" runat="server" Text="Show" CssClass="btn btn-primary " OnClick="Button2_Click" />
        </div>
    </div>
    <div class="myroot">
        <div class="row">
            <div class="col-md-offset-3 col-md-7 ">
                <br />
                <br />
                <div id="alert_placeholder">
                </div>
                <asp:DataList ID="DataList1" runat="server" Width="100%">
                    <ItemTemplate>
                        <asp:LinkButton ID="LinkButton1" runat="server" CommandArgument='<%# Eval("Id") %>'>
                            <div class="box">
                                <div class="title">
                                    <asp:Label ID="Label4" runat="server" Text='<%# Eval("Bus_name") %>'></asp:Label>
                                    (<asp:Label ID="Label5" runat="server" Text='<%# Eval("start_time") %>'></asp:Label>)
                                    <asp:Label ID="Label1" runat="server" Text='<%# Eval("Bus_type") %>'></asp:Label>
                                </div>
                                <div class="detail clearfix">
                                    <div class="pull-left">
                                        <label>
                                            Source City:
                                        </label>
                                        <asp:Label ID="Label3" runat="server" Text='<%# Eval("source") %>'>Source City</asp:Label>
                                    </div>
                                    <div class="pull-right">
                                        <label>
                                            Destination City:
                                        </label>
                                        <asp:Label ID="Label2" runat="server" CssClass="pull-right" Text='<%# Eval("des") %>'></asp:Label>
                                    </div>
                                </div>
                            </div>
                        </asp:LinkButton>
                    </ItemTemplate>
                </asp:DataList>
                <asp:DataList ID="DataList2" runat="server" Width="100%" OnItemDataBound="DataList1_ItemDataBound">
                    <ItemTemplate>
                        <asp:LinkButton ID="LinkButton1" runat="server" CommandArgument='<%# Eval("Id") %>'>
                            <div class="box">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("img") %>' />
                                    </div>
                                    <div class="col-sm-10">
                                        <div class="title">
                                            <label>
                                                Name :
                                            </label>
                                            <asp:Label ID="Label4" runat="server" Text='<%# Eval("name") %>'></asp:Label>
                                        </div>
                                        <div class="detail">
                                            <label>
                                                Contact Number :
                                            </label>
                                            <asp:Label ID="Label1" runat="server" Text='<%# Eval("contact") %>'>Source City</asp:Label>
                                        </div>
                                        <div class="detail">
                                            <label>
                                                Liecence Number :
                                            </label>
                                            <asp:Label ID="Label5" runat="server" Text='<%# Eval("Liecence_No") %>'>Source City</asp:Label>
                                        </div>
                                        <div class="detail">
                                            <label>
                                                Vehicle Number :
                                            </label>
                                            <asp:Label ID="Label6" runat="server" Text='<%# Eval("Vehical_No") %>'>Source City</asp:Label>
                                        </div>
                                        <div class="detail">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <label>
                                                        Area :
                                                    </label>
                                                    <asp:Label ID="Label12" runat="server" Text='<%# Eval("area") %>'></asp:Label>
                                                </div>
                                                <div class="col-sm-6">
                                                    <label>
                                                        Rate :
                                                    </label>
                                                    <asp:Label ID="Label9" runat="server" Text='<%# Eval("rate") %>'></asp:Label>
                                                    Rs
                                                </div>
                                            </div>
                                        </div>
                                        <div class="detail">
                                            <label>
                                                Facility :
                                            </label>
                                            <asp:Label ID="Label10" runat="server" Text='<%# Eval("facility") %>'></asp:Label>
                                        </div>
                                        <div class="detail">
                                            <label>
                                                Vehicle Image :
                                            </label>
                                            <asp:Image ID="Image2" runat="server" ImageUrl='<%# Eval("vehical_img") %>' Height="150"
                                                Width="150" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </asp:LinkButton>
                    </ItemTemplate>
                </asp:DataList>
                <div class="alert alert-danger" runat="server" visible="false" id="alertBox">
                    There is No Data in Our Database.
                </div>
            </div>
        </div>
    </div>
    <script src="js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript">
        function showalert(message, alerttype) {
            $('#alert_placeholder').append('<div id="alertdiv" class="alert ' + alerttype + ' fade in"><a class="close" data-dismiss="alert">×</a><span class="text-center">' + message + '</span></div>')
            setTimeout(function () {
                $("#alertdiv").remove();
            }, 5000);
        }
    </script>
</asp:Content>
