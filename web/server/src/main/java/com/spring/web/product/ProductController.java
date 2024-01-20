package com.spring.web.product;

import com.spring.web.product.dto.ProductRequest;
import com.spring.web.product.dto.SellProductRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @PostMapping("")
    public Product addProduct(@RequestBody ProductRequest request){
        return productService.addProduct(request);
    }

    @PutMapping("")
    public Product sellProduct(@RequestBody SellProductRequest request) throws Exception {
        return productService.sellProduct(request.getProductId(), request.getQuantity());
    }

}
