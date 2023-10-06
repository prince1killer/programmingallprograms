using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class a_show : System.Web.UI.Page
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

    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();

        cmd = new SqlCommand("select * from addcategory", cn);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        GridView1.DataSource = ds;
        GridView1.DataBind();

        cmd.ExecuteNonQuery();


        //Deleted query
        if (Request.QueryString["delete"] != null)
        {
            mycon();
            cmd = new SqlCommand("delete from addcategory where id=@id", cn);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["delete"]);

            cmd.ExecuteNonQuery();
            Response.Redirect("a_show.aspx");
        }


    }
}