using System;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

public partial class _Default : System.Web.UI.Page 
{

    DB cn = new DB();
    DataSet ds;

    protected void Page_Load(object sender, EventArgs e)
    {


        ds = cn.getDataSet("select * from products","products");
      //  GridView1.DataSource = ds;
       // GridView1.DataBind();

        Label1.Text = cn.ExecuteScalar("select productId from products where productid=5");

       // create table tbl2 ( id Int identity(1000,10) not null, name varchar(30) null)
        //alter table tbl2 add Address varchar(300) Not null, city varchar(20) null



       // int a = cn.maxid("products");
        
    }
}
