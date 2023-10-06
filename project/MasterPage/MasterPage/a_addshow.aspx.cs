using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class a_addshow : System.Web.UI.Page
{
    SqlConnection cn;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();

        cmd = new SqlCommand("select * from addproducts", cn);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        grideview1.DataSource = ds;
        grideview1.DataBind();

        if (Request.QueryString["delete"] != null)
        {
            cmd = new SqlCommand("delete from addproducts where id=@id", cn);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["delete"]);

            cmd.ExecuteNonQuery();

            Response.Redirect("http://localhost:1235/a_addshow.aspx");
        }
    }
}