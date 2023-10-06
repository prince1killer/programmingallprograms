<%@ Page Title="" Language="C#" MasterPageFile="~/Client/ClientMasterPage.master" EnableEventValidation="false" AutoEventWireup="true" CodeFile="clientcart.aspx.cs" Inherits="Client_clientcart" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><a href="#">Home</a></li>
				  <li class="active">Shopping Cart</li>
				</ol>
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
							<td></td>
						</tr>
					</thead>
					<tbody>

                        <asp:Repeater runat="server" ID="cartproductdetail">
                            <ItemTemplate>

                         <tr>
							<td class="cart_product">
                                <asp:Image ImageUrl='<%#Eval("image") %>' ID="cartimg" runat="server" />
							
							</td>
							<td class="cart_description">
								<h4> <asp:Label Text='<%#Eval("productname") %>' runat="server" /> </h4>
								<p> Web id : <asp:Label Text='<%#Eval("id") %>' runat="server" /> </p>
							</td>
							<td class="cart_price">
								<p> <asp:Label Text='<%#Eval("productprice") %>' runat="server" /> </p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									
                                    <asp:TextBox runat="server" class="cart_quantity_input"  type="number" value='<%#Eval("quantity") %>'/>
                                   
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">  <asp:Label Text='<%#Eval("productprice") %>' runat="server" /> </p>
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete" href='clientcart.aspx?delete=<%#Eval("id") %>'><i class="fa fa-times"></i></a>
							</td>
						</tr>

                            </ItemTemplate>
                        </asp:Repeater>

						

						
					</tbody>
				</table>
			</div>

            <div class="shopper-informations">
				<div class="row">
					
                    <div class="register-req">  

                        Shipping Information

                    </div>

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
                     <asp:Button Text="Save Shipping Information" class="shippingbtn" id="shippingbtn" runat="server" OnClick="shippingbtn_Click"/>
                     <asp:Button Text="Change Shipping Information" class="shippingbtn" id="changebtn" runat="server" OnClick="changebtn_Click"/>

						</div>
					</div>
						
				</div>
			</div>

		</div>
	</section> <!--/#cart_items-->

   

	<section id="do_action">
		<div class="container">
			<div class="heading">
				<h3>What would you like to do next?</h3>
				<p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
			</div>
			<div class="row">
				<div class="col-sm-6">
					<div class="chose_area">

                     <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

                       <asp:UpdatePanel ID="UpdatePanel1" runat="server">

                           <ContentTemplate>

                            <asp:RadioButton Text="COD" ID="cod" AutoPostBack="true" runat="server" GroupName="radio" OnCheckedChanged="cod_CheckedChanged"/>
                            <asp:RadioButton Text="Upi Payment" AutoPostBack="true" ID="upi" runat="server" GroupName="radio" OnCheckedChanged="upi_CheckedChanged1"/>

                            <asp:Image ImageUrl="~/image/WhatsApp Image 2022-06-18 at 9.36.52 AM.jpg" CssClass="upiimg" ID="upiimg" Visible="false" runat="server" />
                            <asp:Label Text="*Scan QR Code For Online Payment*" ID="lab1" Visible="false" runat="server" /><br>
                          

                           </ContentTemplate>


                       </asp:UpdatePanel>

					   <asp:Label Text="*Must Upload Payment Receipt*" ID="lab2"  runat="server" />
                               <br>
                               <asp:FileUpload ID="FileUpload1" runat="server"  />
					</div>
				</div>
                  
				<div class="col-sm-6">
					<div class="total_area">
						<ul>
                            <%--<asp:TextBox ID="firstname" runat="server"  placeholder="First Name *"/>
                                    <%--<asp:TextBox ID="lastname" runat="server"  placeholder="Last Name *"/>
                                    <asp:TextBox ID="email" runat="server"  placeholder="Email *"/>
                                    <asp:TextBox ID="add1" runat="server"  placeholder="Address 1 *"/>
                                    <asp:TextBox ID="add2" runat="server"  placeholder="Address 2 *"/>--%>
							<li>Cart Sub Total <span id="total" runat="server">  </span></li>

							<li>Total Quantity <span id="qty" runat="server">  </span></li>
							
							<li>Shipping Cost <span>Free</span></li>
							<li>Total <span id="grandtotal"  runat="server"></span></li>
						</ul>
                            <asp:Button class="btn btn-default update" Text="Check Out" id="checkoutbtn" runat="server" OnClick="checkoutbtn_Click" />
                              <asp:Button class="btn btn-default update" Text="Placed Order" id="Button1" runat="server" OnClick="Button1_Click" />
					</div>
				</div>
			</div>
		</div>
	</section><!--/#do_action-->

    </section>

    </section>

</asp:Content>

