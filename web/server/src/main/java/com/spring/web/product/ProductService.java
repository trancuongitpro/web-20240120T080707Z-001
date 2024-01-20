package com.spring.web.product;

import com.spring.web.product.dto.ProductRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;

import java.util.List;

@Service
@RequiredArgsConstructor
@ControllerAdvice
public class ProductService {
    private final ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product addProduct(ProductRequest request){
        Product newProduct = new Product(
                request.getName(),
                request.getPrice(),
                request.getQuantity()
        );

        return productRepository.save(newProduct);
    }

    public Product sellProduct(Long productId, Integer quantity) throws Exception {
        Product product = productRepository.findAllById(productId);

        if(quantity>product.getQuantity()){
            throw new Exception("Quantity not enough");
        }
        product.setQuantity(product.getQuantity() - quantity);
        return productRepository.save(product);
    }
}
