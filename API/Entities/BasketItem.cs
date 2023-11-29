using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
  [Table("Basket Items")]
  public class BasketItem
  {
    public int Id { get; set; }
    public int Quantity { get; set; }

    // navigation properties
    public int ProductId { get; set; }
    public Product Product { get; set; }

    public int BaskedId { get; set; }
    public Basket Basket { get; set; }

  }
}