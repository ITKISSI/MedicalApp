package pfa.account.creation.account_creation.config;

/*

 */
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import pfa.account.creation.account_creation.security.JwtAuthenticationEntryPoint;
import pfa.account.creation.account_creation.security.JwtAuthenticationFilter;
import pfa.account.creation.account_creation.security.JwtTokenProvider;


@Configuration
public class SecurityConfig {


    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    // basic auth
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable()
                .authorizeHttpRequests(autorize -> autorize.requestMatchers(HttpMethod.GET,"/api/**").permitAll().anyRequest().authenticated())
                .httpBasic(Customizer.withDefaults());
        // allow CORS
        httpSecurity.cors();
        return httpSecurity.build();
    }


    @Bean
    public UserDetailsService userDetailsService(){
        UserDetails userDetails= User.builder()
                .username("admin")
                .password(passwordEncoder().encode("admin"))
                .roles("Admin")
                .build();

        UserDetails user2=User.builder()
                .username("assistant")
                .password(passwordEncoder().encode("assistant"))
                .roles("assistant")
                .build();

        return new InMemoryUserDetailsManager(userDetails,user2);
    }
}
