using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class a_addproduct : System.Web.UI.Page
{
    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");
        cn.Open();
    }



    void loadcategory()
    {
        mycon();
        cmd = new SqlCommand("select * from addcategory", cn);


        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        category_dropdown.DataSource = ds;
        category_dropdown.DataTextField = "Categoryname";
        category_dropdown.DataValueField = "id";
        category_dropdown.DataBind();
        category_dropdown.Items.Insert(0, "--Select Category--");


    }

    void subcategory(int catid)
    {
        mycon();

        cmd = new SqlCommand("select * from addsubcategory where cid=@cid",cn);
        cmd.Parameters.AddWithValue("@cid",catid);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        subcategorytextbox.DataSource = ds;
        subcategorytextbox.DataTextField = "subcategory";
        subcategorytextbox.DataValueField = "id";
        subcategorytextbox.DataBind();
    }
    void thirdcategory(int storeid)
    {
        mycon();

        cmd = new SqlCommand("select * from addthirdcategory where sid=@sid", cn);
        cmd.Parameters.AddWithValue("@sid", storeid);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        thirdcategorytextbox.DataSource = ds;
        thirdcategorytextbox.DataTextField = "thirdcategory";
        thirdcategorytextbox.DataValueField = "Id";
        thirdcategorytextbox.DataBind();
    }
    void loadsubcategory()
    {
        mycon();
        cmd = new SqlCommand("select * from addsubcategory", cn);


        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        subcategorytextbox.DataSource = ds;
        subcategorytextbox.DataTextField = "subcategory";
        subcategorytextbox.DataValueField = "id";
        subcategorytextbox.DataBind();


    }


    void loadthirdcategory()
    {
        mycon();
        cmd = new SqlCommand("select * from addthirdcategory", cn);


        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        thirdcategorytextbox.DataSource = ds;
        thirdcategorytextbox.DataTextField = "thirdcategory";
        thirdcategorytextbox.DataValueField = "id";
        thirdcategorytextbox.DataBind();


    }


    protected void Page_Load(object sender, EventArgs e)
    {
       
        if (IsPostBack == false)
        {
            loadcategory();


            if (Request.QueryString["edit"] != null)
            {
                //loadsubcategory();
                //loadthirdcategory();
                mycon();

                cmd = new SqlCommand("select * from addproducts where id=@id", cn);
                cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);

                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    category_dropdown.Text = ds.Tables[0].Rows[0]["cid"].ToString();
                    subcategorytextbox.Text = ds.Tables[0].Rows[0]["sid"].ToString();
                    thirdcategorytextbox.Text = ds.Tables[0].Rows[0]["tid"].ToString();
                    brand.Text = ds.Tables[0].Rows[0]["brand"].ToString();
                    productname.Text = ds.Tables[0].Rows[0]["productname"].ToString();
                    productprice.Text = ds.Tables[0].Rows[0]["productprice"].ToString();

                    productcolor.Text = ds.Tables[0].Rows[0]["productcolor"].ToString();
                     img.ImageUrl= ds.Tables[0].Rows[0]["productimage"].ToString();

                    disc.Text = ds.Tables[0].Rows[0]["discription"].ToString();

                    t2.Text = ds.Tables[0].Rows[0]["Status"].ToString();

                    int storeid = Convert.ToInt32(ds.Tables[0].Rows[0]["sid"]);

                    subcategory(Convert.ToInt32(ds.Tables[0].Rows[0]["cid"]));
                    thirdcategory(storeid);


                }

            }
        }

    }
    protected void Button1_Click(object sender, EventArgs e)
    {

        mycon();

        if (Request.QueryString["edit"] != null)
        {
             mycon();

            cmd = new SqlCommand("update addproducts set cid=@cid,sid=@sid,tid=@tid,Category=@name,subcategory=@subcategory,thirdcategory=@thirdcategory,brand=@brand,productname=@pname,productprice=@pprice,productcolor=@pcolor,productimage=@pimg,discription=@disc,status=@status where id=@id", cn);
            cmd.Parameters.AddWithValue("@name", category_dropdown.SelectedItem.Text);
            cmd.Parameters.AddWithValue("@subcategory", subcategorytextbox.SelectedItem.Text);
            cmd.Parameters.AddWithValue("@thirdcategory", thirdcategorytextbox.SelectedItem.Text);
            cmd.Parameters.AddWithValue("@brand", brand.Text);
            cmd.Parameters.AddWithValue("@pname", productname.Text);
            cmd.Parameters.AddWithValue("@pprice", productprice.Text);
            cmd.Parameters.AddWithValue("@pcolor", productcolor.Text);

            cmd.Parameters.AddWithValue("@cid", category_dropdown.SelectedValue);
            cmd.Parameters.AddWithValue("@sid", subcategorytextbox.SelectedValue);
            cmd.Parameters.AddWithValue("@tid", thirdcategorytextbox.SelectedValue);


            if (FileUpload1.HasFile)
            {
                var path = "~/image/" + FileUpload1.FileName;
                FileUpload1.SaveAs(Server.MapPath("~/image/" + FileUpload1.FileName));
                img.ImageUrl = "~/image" + FileUpload1.FileName;
                cmd.Parameters.AddWithValue("@pimg", path);
            }
            else
            {
                cmd.Parameters.AddWithValue("@pimg", img.ImageUrl);

            }



            cmd.Parameters.AddWithValue("@disc", disc.Text);

            cmd.Parameters.AddWithValue("@status", t2.Text);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);


            cmd.ExecuteNonQuery();

            Response.Write("Update SuccessFull");
            Response.Redirect("http://localhost:1235/a_addshow.aspx");
        }

        else
        {

            cmd = new SqlCommand("select * from addproducts where productname=@name", cn);
            cmd.Parameters.AddWithValue("@name", productname.Text);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            if (ds.Tables[0].Rows.Count > 0)
            {
                Response.Write("Already Exit");
            }

            else
            {

                cmd = new SqlCommand("insert into addproducts values(@category,@subcategory,@thirdcategory,@brand,@pname,@pprice,@pcolor,@pimage,@disc,@status,@cid,@sid,@tid)", cn);
                cmd.Parameters.AddWithValue("@category", category_dropdown.SelectedItem.Text);
                cmd.Parameters.AddWithValue("@subcategory", subcategorytextbox.SelectedItem.Text);
                cmd.Parameters.AddWithValue("@thirdcategory", thirdcategorytextbox.SelectedItem.Text);
                cmd.Parameters.AddWithValue("@brand", brand.Text);
                cmd.Parameters.AddWithValue("@pname", productname.Text);
                cmd.Parameters.AddWithValue("@pprice", productprice.Text);
                cmd.Parameters.AddWithValue("@pcolor", productcolor.Text);

                cmd.Parameters.AddWithValue("@cid", category_dropdown.SelectedValue);
                cmd.Parameters.AddWithValue("@sid", subcategorytextbox.SelectedValue);
                cmd.Parameters.AddWithValue("@tid", thirdcategorytextbox.SelectedValue);


                if (FileUpload1.HasFile)
                {
                    var path="~/image" + FileUpload1.FileName;
                    FileUpload1.SaveAs(Server.MapPath(path));
                    img.ImageUrl = path;
                    cmd.Parameters.AddWithValue("@pimage", path);
                }

                cmd.Parameters.AddWithValue("@disc", disc.Text);
                cmd.Parameters.AddWithValue("@status", t2.Text);
                cmd.ExecuteNonQuery();

            }
        }

    }

    protected void category_dropdown_SelectedIndexChanged(object sender, EventArgs e)
    {
        mycon();

        //int cid = Convert.ToInt32(category_dropdown.SelectedValue);
        //subcategory(cid);


        cmd = new SqlCommand("select * from addsubcategory where cid=@cid", cn);
        cmd.Parameters.AddWithValue("@cid", category_dropdown.SelectedValue);


        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        subcategorytextbox.DataSource = ds;
        subcategorytextbox.DataTextField = "subcategory";
        subcategorytextbox.DataValueField = "id";
        subcategorytextbox.DataBind();
        subcategorytextbox.Items.Insert(0, "--Select Sub Category--");


    }

    protected void subcategorytextbox_SelectedIndexChanged(object sender, EventArgs e)
    {
        mycon();

        //int sid = Convert.ToInt32(subcategorytextbox.SelectedValue);
        //thirdcategory(sid);
        //loadthirdcategory();

        cmd = new SqlCommand("select * from addthirdcategory where sid=@sub", cn);
        cmd.Parameters.AddWithValue("@sub", subcategorytextbox.SelectedValue);


        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        thirdcategorytextbox.DataSource = ds;
        thirdcategorytextbox.DataTextField = "thirdcategory";
        thirdcategorytextbox.DataValueField = "id";
        thirdcategorytextbox.DataBind();
        thirdcategorytextbox.Items.Insert(0, "--Select Third Category--");

    }
}