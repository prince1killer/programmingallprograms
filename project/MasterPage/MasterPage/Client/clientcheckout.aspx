<%@ Page Title="" Language="C#" MasterPageFile="~/Client/ClientMasterPage.master" AutoEventWireup="true" CodeFile="clientcheckout.aspx.cs" Inherits="Client_clientcheckout" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><a href="#">Home</a></li>
				  <li class="active">Check out</li>
				</ol>
			</div><!--/breadcrums-->

			<div class="step-one">
				<h2 class="heading">Shipping Details</h2>
			</div>

			<div class="shopper-informations">
				<div class="row">
					<div class="col-sm-12 clearfix">
						<div class="bill-to">
							<p>Bill To</p>
							<div class="form-one">
								
                                <div class="form">
                                    <asp:TextBox ID="firstname" runat="server" placeholder="First Name *" ReadOnly="True"/>
                                    <asp:TextBox ID="lastname" runat="server" placeholder="Last Name *" ReadOnly="True"/>
                                    <asp:TextBox ID="email" runat="server" placeholder="Email *" ReadOnly="True"/>
                                    <asp:TextBox ID="add1" runat="server" TextMode="MultiLine" placeholder="Address  *" ReadOnly="True"/>
								</div>

							</div>
							<div class="form-two">
								
                                <div class="form">
                                    <asp:TextBox ID="zip" runat="server" placeholder="Zip / Postal Code *" ReadOnly="True"/>
									
                                <asp:DropDownList runat="server" ID="country" Enabled="False">

                                        <asp:ListItem Text="-- Country --" />
                                        <asp:ListItem Text="United States" />
                                        <asp:ListItem Text="Bangladesh" />
                                        <asp:ListItem Text="India" />
                                        <asp:ListItem Text="Pakistan" />
                                        <asp:ListItem Text="Canada" />
                                        <asp:ListItem Text="Dubai" />


                                </asp:DropDownList>

                               <asp:DropDownList runat="server" ID="state" Enabled="False">

                                        <asp:ListItem Text="-- State --" />
                                        <asp:ListItem Text="Gujarat" />
                                        <asp:ListItem Text="Maharastra" />
                                        <asp:ListItem Text="Rajastan" />
                                        <asp:ListItem Text="Tamilnadu" />
                                        <asp:ListItem Text="Utterpradesh" />


                                </asp:DropDownList>
									

                                    <asp:TextBox ID="mobile" runat="server"  placeholder="Mobile Number *" ReadOnly="True"/>
                                    <asp:TextBox ID="altmobile" runat="server"  placeholder="Alternative Number *" ReadOnly="True"/>
                                </div>
								
							</div>
                    
						</div>
					</div>
			</div>
			<div class="review-payment">
				<h2>Order Details</h2>
			</div>

			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">Item</td>
							<td class="description"></td>
							<td class="price">Price</td>
							<td class="quantity">Quantity</td>
							<td class="total">Total</td>
							<td class="total">Payment Status</td>
                            <td></td>
						</tr>
					</thead>
					<tbody>

                        <asp:Repeater runat="server" ID="checkoutrpt" OnItemDataBound="checkoutrpt_ItemDataBound">
                            <ItemTemplate>

                            <tr>
							<td class="cart_product">
								<asp:Image ImageUrl='<%#Eval("productimage") %>' runat="server" />
							</td>
							<td class="cart_description">
								<h4> <asp:Label Text='<%#Eval("productname") %>' runat="server" /> </h4>
								<p>Invoice no: <%#Eval("invoice") %></p>
							</td>
							<td class="cart_price">
								<p> <asp:Label Text='<%#Eval("productprice") %>' runat="server" /> </p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">  <asp:Label Text='<%#Eval("qty") %>' runat="server" /> </div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price"  runat="server"><asp:Label Text='<%#Eval("productprice") %>' runat="server" /></p>
							</td>

                            <td class="cart_total">
								<p class="cart_total_price"  runat="server"><asp:Label Text='<%#Eval("paymentstatus") %>' runat="server" /></p>
							</td> 

							<td class="cart_delete">
								<a class="cart_quantity_delete" id="dlt_btn" href='clientcheckout.aspx?delete=<%#Eval("productid") %>'><i class="fa fa-times"></i> Delete</a>
							</td>
						</tr>

                            </ItemTemplate>
                        </asp:Repeater>

						

						
					</tbody>
				</table>
			</div>
		</div>
	</section> <!--/#cart_items-->

</asp:Content>

