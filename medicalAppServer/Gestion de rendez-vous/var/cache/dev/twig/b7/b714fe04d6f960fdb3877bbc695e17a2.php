<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @ApiPlatform/DataCollector/request.html.twig */
class __TwigTemplate_d166ffe6ab37a2d1d7ff968bb46c559b extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'toolbar' => [$this, 'block_toolbar'],
            'menu' => [$this, 'block_menu'],
            'panel' => [$this, 'block_panel'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@ApiPlatform/DataCollector/request.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@ApiPlatform/DataCollector/request.html.twig"));

        // line 77
        $macros["apiPlatform"] = $this->macros["apiPlatform"] = $this;
        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@ApiPlatform/DataCollector/request.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 79
    public function block_toolbar($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "toolbar"));

        // line 80
        echo "    ";
        ob_start();
        // line 81
        echo "        ";
        $context["status_color"] = ((((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["collector"] ?? null), "counters", [], "any", false, true, false, 81), "ignored_filters", [], "any", true, true, false, 81)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["collector"] ?? null), "counters", [], "any", false, true, false, 81), "ignored_filters", [], "any", false, false, false, 81), false)) : (false))) ? ("yellow") : ("default"));
        // line 82
        echo "        ";
        echo twig_include($this->env, $context, "@ApiPlatform/DataCollector/api-platform-icon.svg");
        echo "
    ";
        $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 84
        echo "
    ";
        // line 85
        ob_start();
        // line 86
        echo "        ";
        if (twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 86, $this->source); })()), "version", [], "any", false, false, false, 86)) {
            // line 87
            echo "            <div class=\"sf-toolbar-info-piece\">
                <b>Version</b>
                <span>";
            // line 89
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 89, $this->source); })()), "version", [], "any", false, false, false, 89), "html", null, true);
            echo "</span>
            </div>
        ";
        }
        // line 92
        echo "        ";
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 92, $this->source); })()), "resources", [], "any", false, false, false, 92)) == 0)) {
            // line 93
            echo "            <div class=\"sf-toolbar-info-piece\">
                <b>Resource Class</b>
                <span>Not an API Platform resource</span>
            </div>
        ";
        }
        // line 98
        echo "        ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 98, $this->source); })()), "resources", [], "any", false, false, false, 98));
        foreach ($context['_seq'] as $context["_key"] => $context["resource"]) {
            // line 99
            echo "            <div class=\"sf-toolbar-info-piece\">
                <b>Resource Class</b>
                <span>";
            // line 101
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["resource"], "resourceClass", [], "any", false, false, false, 101), "html", null, true);
            echo "</span>
            </div>
            ";
            // line 103
            if (((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["resource"], "counters", [], "any", false, true, false, 103), "ignored_filters", [], "any", true, true, false, 103)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["resource"], "counters", [], "any", false, true, false, 103), "ignored_filters", [], "any", false, false, false, 103), false)) : (false))) {
                // line 104
                echo "                <div class=\"sf-toolbar-info-piece\">
                    <b>Ignored Filters</b>
                    <span class=\"sf-toolbar-status sf-toolbar-status-yellow\">";
                // line 106
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 106, $this->source); })()), "counters", [], "any", false, false, false, 106), "ignored_filters", [], "any", false, false, false, 106), "html", null, true);
                echo "</span>
                </div>
            ";
            }
            // line 109
            echo "        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['resource'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 110
        echo "    ";
        $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 111
        echo "
    ";
        // line 112
        echo twig_include($this->env, $context, "@WebProfiler/Profiler/toolbar_item.html.twig", ["link" => true, "status" => (isset($context["status_color"]) || array_key_exists("status_color", $context) ? $context["status_color"] : (function () { throw new RuntimeError('Variable "status_color" does not exist.', 112, $this->source); })())]);
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 115
    public function block_menu($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        // line 116
        echo "    ";
        // line 117
        echo "    <span class=\"label";
        echo ((twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 117, $this->source); })()), "resources", [], "any", false, false, false, 117)) ? ("") : (" disabled"));
        echo "\">
        <span class=\"icon\">
            ";
        // line 119
        echo twig_include($this->env, $context, "@ApiPlatform/DataCollector/api-platform.svg");
        echo "
        </span>
        <strong>API Platform</strong>
    </span>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 125
    public function block_panel($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "panel"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "panel"));

        // line 126
        echo "    ";
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 126, $this->source); })()), "resources", [], "any", false, false, false, 126)) == 0)) {
            // line 127
            echo "        <div class=\"metrics\">
            <div class=\"metric\">
                <span class=\"value\">Not an API Platform resource</span>
                <span class=\"label\">Resource Class</span>
            </div>
        </div>
    ";
        }
        // line 134
        echo "    ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 134, $this->source); })()), "resources", [], "any", false, false, false, 134));
        foreach ($context['_seq'] as $context["_key"] => $context["dataCollected"]) {
            // line 135
            echo "        <div class=\"metrics\">
            <div class=\"metric\">
                <span class=\"value\">";
            // line 137
            echo twig_escape_filter($this->env, ((twig_get_attribute($this->env, $this->source, $context["dataCollected"], "resourceClass", [], "any", true, true, false, 137)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, $context["dataCollected"], "resourceClass", [], "any", false, false, false, 137), "Not an API Platform resource")) : ("Not an API Platform resource")), "html", null, true);
            echo "</span>
                <span class=\"label\">Resource Class</span>
            </div>
        </div>
        ";
            // line 141
            if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["dataCollected"], "resourceMetadataCollection", [], "any", false, false, false, 141))) {
                // line 142
                echo "            <div class=\"sf-tabs\">
                <div class=\"tab\">
                    <h3 class=\"tab-title metadata-tab-title\">Metadata</h3>
                    <h3>Resources</h3>
                    <div class=\"tab-content metadata-tab-content\">
                        <div class=\"sf-tabs\">
                            ";
                // line 148
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["dataCollected"], "resourceMetadataCollection", [], "any", false, false, false, 148));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["resourceMetadata"]) {
                    // line 149
                    echo "                                <div class=\"tab\">
                                    <h3 class=\"tab-title\">
                                        ";
                    // line 151
                    echo twig_escape_filter($this->env, (((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["resourceMetadata"], "resource", [], "any", false, true, false, 151), "uriTemplate", [], "any", true, true, false, 151) &&  !(null === twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["resourceMetadata"], "resource", [], "any", false, true, false, 151), "uriTemplate", [], "any", false, false, false, 151)))) ? (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["resourceMetadata"], "resource", [], "any", false, true, false, 151), "uriTemplate", [], "any", false, false, false, 151)) : (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["resourceMetadata"], "resource", [], "any", false, false, false, 151), "shortName", [], "any", false, false, false, 151))), "html", null, true);
                    echo "
                                    </h3>
                                    <div class=\"tab-content\">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th scope=\"col\" class=\"key\">Resource</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>";
                    // line 162
                    echo $this->extensions['Symfony\Bundle\WebProfilerBundle\Twig\WebProfilerExtension']->dumpData($this->env, twig_get_attribute($this->env, $this->source, $context["resourceMetadata"], "resource", [], "any", false, false, false, 162), 1);
                    echo "</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        ";
                    // line 166
                    echo twig_call_macro($macros["apiPlatform"], "macro_operationTable", [twig_get_attribute($this->env, $this->source, $context["resourceMetadata"], "operations", [], "any", false, false, false, 166), "", ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["dataCollected"], "requestAttributes", [], "any", false, true, false, 166), "operation_name", [], "any", true, true, false, 166)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["dataCollected"], "requestAttributes", [], "any", false, true, false, 166), "operation_name", [], "any", false, false, false, 166), "")) : (""))], 166, $context, $this->getSourceContext());
                    echo "
                                        <table>
                                            <thead>
                                            <tr>
                                                <th scope=\"col\" class=\"key\">Filters</th>
                                                <th scope=\"col\"></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            ";
                    // line 175
                    if ((twig_get_attribute($this->env, $this->source, $context["dataCollected"], "filters", [], "any", false, false, false, 175) && twig_in_filter(twig_get_attribute($this->env, $this->source, $context["loop"], "index0", [], "any", false, false, false, 175), twig_get_array_keys_filter(twig_get_attribute($this->env, $this->source, $context["dataCollected"], "filters", [], "any", false, false, false, 175))))) {
                        // line 176
                        echo "                                                ";
                        $context['_parent'] = $context;
                        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["dataCollected"], "filters", [], "any", false, false, false, 176), twig_get_attribute($this->env, $this->source, $context["loop"], "index0", [], "any", false, false, false, 176), [], "array", false, false, false, 176));
                        $context['loop'] = [
                          'parent' => $context['_parent'],
                          'index0' => 0,
                          'index'  => 1,
                          'first'  => true,
                        ];
                        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                            $length = count($context['_seq']);
                            $context['loop']['revindex0'] = $length - 1;
                            $context['loop']['revindex'] = $length;
                            $context['loop']['length'] = $length;
                            $context['loop']['last'] = 1 === $length;
                        }
                        foreach ($context['_seq'] as $context["id"] => $context["filter"]) {
                            // line 177
                            echo "                                                    ";
                            $context["ignored_filter"] = ($context["filter"] === null);
                            // line 178
                            echo "                                                    <tr";
                            if ((isset($context["ignored_filter"]) || array_key_exists("ignored_filter", $context) ? $context["ignored_filter"] : (function () { throw new RuntimeError('Variable "ignored_filter" does not exist.', 178, $this->source); })())) {
                                echo " class=\"status-warning\"";
                            }
                            echo ">
                                                        <td>
                                                            ";
                            // line 180
                            echo twig_escape_filter($this->env, $context["id"], "html", null, true);
                            echo "
                                                            ";
                            // line 181
                            if ((isset($context["ignored_filter"]) || array_key_exists("ignored_filter", $context) ? $context["ignored_filter"] : (function () { throw new RuntimeError('Variable "ignored_filter" does not exist.', 181, $this->source); })())) {
                                // line 182
                                echo "                                                                <span class=\"newline text-muted\">ignored filter</span>
                                                            ";
                            } else {
                                // line 184
                                echo "                                                                ";
                                echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, $context["filter"]);
                                echo "
                                                            ";
                            }
                            // line 186
                            echo "                                                        </td>
                                                    </tr>
                                                ";
                            ++$context['loop']['index0'];
                            ++$context['loop']['index'];
                            $context['loop']['first'] = false;
                            if (isset($context['loop']['length'])) {
                                --$context['loop']['revindex0'];
                                --$context['loop']['revindex'];
                                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                            }
                        }
                        $_parent = $context['_parent'];
                        unset($context['_seq'], $context['_iterated'], $context['id'], $context['filter'], $context['_parent'], $context['loop']);
                        $context = array_intersect_key($context, $_parent) + $_parent;
                        // line 189
                        echo "                                            ";
                    } else {
                        // line 190
                        echo "                                                <tr>
                                                    <td class=\"text-muted\" colspan=\"2\">
                                                        No available filter declared for this resource.
                                                    </td>
                                                </tr>
                                            ";
                    }
                    // line 196
                    echo "                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['resourceMetadata'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 201
                echo "                        </div>
                    </div>
                </div>
            </div>
        ";
            }
            // line 206
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['dataCollected'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 3
    public function macro_operationLine($__key__ = null, $__operation__ = null, $__actualOperationName__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "key" => $__key__,
            "operation" => $__operation__,
            "actualOperationName" => $__actualOperationName__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
            $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "macro", "operationLine"));

            $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
            $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "macro", "operationLine"));

            // line 4
            echo "    <tr>
        <th scope=\"row\"";
            // line 5
            if (((isset($context["key"]) || array_key_exists("key", $context) ? $context["key"] : (function () { throw new RuntimeError('Variable "key" does not exist.', 5, $this->source); })()) == (isset($context["actualOperationName"]) || array_key_exists("actualOperationName", $context) ? $context["actualOperationName"] : (function () { throw new RuntimeError('Variable "actualOperationName" does not exist.', 5, $this->source); })()))) {
                echo " class=\"status-success\"";
            }
            echo ">";
            echo twig_escape_filter($this->env, (isset($context["key"]) || array_key_exists("key", $context) ? $context["key"] : (function () { throw new RuntimeError('Variable "key" does not exist.', 5, $this->source); })()), "html", null, true);
            echo "</th>
        <td";
            // line 6
            if (((isset($context["key"]) || array_key_exists("key", $context) ? $context["key"] : (function () { throw new RuntimeError('Variable "key" does not exist.', 6, $this->source); })()) == (isset($context["actualOperationName"]) || array_key_exists("actualOperationName", $context) ? $context["actualOperationName"] : (function () { throw new RuntimeError('Variable "actualOperationName" does not exist.', 6, $this->source); })()))) {
                echo " class=\"status-success\"";
            }
            echo ">";
            echo $this->extensions['Symfony\Bundle\WebProfilerBundle\Twig\WebProfilerExtension']->dumpData($this->env, (isset($context["operation"]) || array_key_exists("operation", $context) ? $context["operation"] : (function () { throw new RuntimeError('Variable "operation" does not exist.', 6, $this->source); })()), 1);
            echo "</td>
    </tr>
";
            
            $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

            
            $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);


            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    // line 10
    public function macro_operationTable($__object__ = null, $__name__ = null, $__actualOperationName__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "object" => $__object__,
            "name" => $__name__,
            "actualOperationName" => $__actualOperationName__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
            $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "macro", "operationTable"));

            $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
            $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "macro", "operationTable"));

            // line 11
            echo "    ";
            $macros["apiPlatform"] = $this;
            // line 12
            echo "    <table>
        <thead>
            <tr>
                <th scope=\"col\" class=\"key\">";
            // line 15
            if (array_key_exists("name", $context)) {
                echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, (isset($context["name"]) || array_key_exists("name", $context) ? $context["name"] : (function () { throw new RuntimeError('Variable "name" does not exist.', 15, $this->source); })())), "html", null, true);
            }
            echo "Operations</th>
                <th scope=\"col\">Attributes</th>
            </tr>
        </thead>

        <tbody>
        ";
            // line 21
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["object"]) || array_key_exists("object", $context) ? $context["object"] : (function () { throw new RuntimeError('Variable "object" does not exist.', 21, $this->source); })()));
            $context['_iterated'] = false;
            foreach ($context['_seq'] as $context["key"] => $context["itemOperation"]) {
                // line 22
                echo "            ";
                echo twig_call_macro($macros["apiPlatform"], "macro_operationLine", [$context["key"], $context["itemOperation"], (isset($context["actualOperationName"]) || array_key_exists("actualOperationName", $context) ? $context["actualOperationName"] : (function () { throw new RuntimeError('Variable "actualOperationName" does not exist.', 22, $this->source); })())], 22, $context, $this->getSourceContext());
                echo "
        ";
                $context['_iterated'] = true;
            }
            if (!$context['_iterated']) {
                // line 24
                echo "            <tr>
                <td colspan=\"2\" class=\"text-muted\">
                    No available ";
                // line 26
                echo twig_escape_filter($this->env, twig_lower_filter($this->env, (isset($context["name"]) || array_key_exists("name", $context) ? $context["name"] : (function () { throw new RuntimeError('Variable "name" does not exist.', 26, $this->source); })())), "html", null, true);
                echo " operation for this resource.
                </td>
            </tr>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['itemOperation'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 30
            echo "        </tbody>
    </table>
";
            
            $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

            
            $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);


            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    // line 34
    public function macro_providerTable($__object__ = null, $__name__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "object" => $__object__,
            "name" => $__name__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
            $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "macro", "providerTable"));

            $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
            $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "macro", "providerTable"));

            // line 35
            echo "    ";
            if (twig_test_empty(twig_get_attribute($this->env, $this->source, (isset($context["object"]) || array_key_exists("object", $context) ? $context["object"] : (function () { throw new RuntimeError('Variable "object" does not exist.', 35, $this->source); })()), "responses", [], "any", false, false, false, 35))) {
                // line 36
                echo "        <div class=\"empty\">
            <p>No calls to ";
                // line 37
                echo twig_escape_filter($this->env, (isset($context["name"]) || array_key_exists("name", $context) ? $context["name"] : (function () { throw new RuntimeError('Variable "name" does not exist.', 37, $this->source); })()), "html", null, true);
                echo " have been recorded.</p>
        </div>
    ";
            } else {
                // line 40
                echo "        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Used</th>
                <th>";
                // line 45
                echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, (isset($context["name"]) || array_key_exists("name", $context) ? $context["name"] : (function () { throw new RuntimeError('Variable "name" does not exist.', 45, $this->source); })())), "html", null, true);
                echo "</th>
            </tr>
            </thead>
            <tbody>
            ";
                // line 49
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["object"]) || array_key_exists("object", $context) ? $context["object"] : (function () { throw new RuntimeError('Variable "object" does not exist.', 49, $this->source); })()), "responses", [], "any", false, false, false, 49));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["class"] => $context["used"]) {
                    // line 50
                    echo "                <tr>
                    <td class=\"font-normal text-small text-muted nowrap\">";
                    // line 51
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 51), "html", null, true);
                    echo "</td>
                    <td class=\"font-normal\">
                        ";
                    // line 53
                    if (($context["used"] === true)) {
                        // line 54
                        echo "                            <span class=\"label status-success same-width\">TRUE</span>
                        ";
                    } elseif ((                    // line 55
$context["used"] === false)) {
                        // line 56
                        echo "                            <span class=\"label status-error same-width\">FALSE</span>
                        ";
                    } else {
                        // line 58
                        echo "                            <span class=\"label status-info same-width\">NOT USED</span>
                        ";
                    }
                    // line 60
                    echo "                    </td>
                    <td class=\"font-normal\">";
                    // line 61
                    echo twig_escape_filter($this->env, $context["class"], "html", null, true);
                    echo "</td>
                </tr>
            ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['class'], $context['used'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 64
                echo "            </tbody>
            ";
                // line 65
                if (twig_get_attribute($this->env, $this->source, ($context["object"] ?? null), "context", [], "any", true, true, false, 65)) {
                    // line 66
                    echo "                <tfoot>
                    <tr>
                        <td class=\"font-normal\" colspan=\"2\"></td>
                        <td class=\"font-normal\">Context";
                    // line 69
                    echo $this->extensions['Symfony\Bundle\WebProfilerBundle\Twig\WebProfilerExtension']->dumpData($this->env, twig_get_attribute($this->env, $this->source, (isset($context["object"]) || array_key_exists("object", $context) ? $context["object"] : (function () { throw new RuntimeError('Variable "object" does not exist.', 69, $this->source); })()), "context", [], "any", false, false, false, 69), 2);
                    echo "</td>
                    </tr>
                </tfoot>
            ";
                }
                // line 73
                echo "        </table>
    ";
            }
            
            $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

            
            $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);


            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "@ApiPlatform/DataCollector/request.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  672 => 73,  665 => 69,  660 => 66,  658 => 65,  655 => 64,  638 => 61,  635 => 60,  631 => 58,  627 => 56,  625 => 55,  622 => 54,  620 => 53,  615 => 51,  612 => 50,  595 => 49,  588 => 45,  581 => 40,  575 => 37,  572 => 36,  569 => 35,  549 => 34,  532 => 30,  522 => 26,  518 => 24,  510 => 22,  505 => 21,  494 => 15,  489 => 12,  486 => 11,  465 => 10,  443 => 6,  435 => 5,  432 => 4,  411 => 3,  397 => 206,  390 => 201,  372 => 196,  364 => 190,  361 => 189,  345 => 186,  339 => 184,  335 => 182,  333 => 181,  329 => 180,  321 => 178,  318 => 177,  300 => 176,  298 => 175,  286 => 166,  279 => 162,  265 => 151,  261 => 149,  244 => 148,  236 => 142,  234 => 141,  227 => 137,  223 => 135,  218 => 134,  209 => 127,  206 => 126,  196 => 125,  181 => 119,  175 => 117,  173 => 116,  163 => 115,  151 => 112,  148 => 111,  145 => 110,  139 => 109,  133 => 106,  129 => 104,  127 => 103,  122 => 101,  118 => 99,  113 => 98,  106 => 93,  103 => 92,  97 => 89,  93 => 87,  90 => 86,  88 => 85,  85 => 84,  79 => 82,  76 => 81,  73 => 80,  63 => 79,  52 => 1,  50 => 77,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% macro operationLine(key, operation, actualOperationName) %}
    <tr>
        <th scope=\"row\"{% if key == actualOperationName %} class=\"status-success\"{% endif %}>{{ key }}</th>
        <td{% if key == actualOperationName %} class=\"status-success\"{% endif %}>{{- profiler_dump(operation, 1) -}}</td>
    </tr>
{% endmacro %}

{% macro operationTable(object, name, actualOperationName) %}
    {% import _self as apiPlatform %}
    <table>
        <thead>
            <tr>
                <th scope=\"col\" class=\"key\">{% if name is defined %}{{ name|capitalize }}{% endif %}Operations</th>
                <th scope=\"col\">Attributes</th>
            </tr>
        </thead>

        <tbody>
        {% for key, itemOperation in object %}
            {{ apiPlatform.operationLine(key, itemOperation, actualOperationName) }}
        {% else %}
            <tr>
                <td colspan=\"2\" class=\"text-muted\">
                    No available {{ name|lower }} operation for this resource.
                </td>
            </tr>
        {% endfor %}
        </tbody>
    </table>
{% endmacro %}

{% macro providerTable(object, name) %}
    {% if object.responses is empty %}
        <div class=\"empty\">
            <p>No calls to {{ name }} have been recorded.</p>
        </div>
    {% else %}
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Used</th>
                <th>{{ name|capitalize }}</th>
            </tr>
            </thead>
            <tbody>
            {% for class, used in object.responses %}
                <tr>
                    <td class=\"font-normal text-small text-muted nowrap\">{{ loop.index }}</td>
                    <td class=\"font-normal\">
                        {% if used is same as(true) %}
                            <span class=\"label status-success same-width\">TRUE</span>
                        {% elseif used is same as(false) %}
                            <span class=\"label status-error same-width\">FALSE</span>
                        {% else %}
                            <span class=\"label status-info same-width\">NOT USED</span>
                        {% endif %}
                    </td>
                    <td class=\"font-normal\">{{ class }}</td>
                </tr>
            {% endfor %}
            </tbody>
            {% if object.context is defined %}
                <tfoot>
                    <tr>
                        <td class=\"font-normal\" colspan=\"2\"></td>
                        <td class=\"font-normal\">Context{{ profiler_dump(object.context, 2) }}</td>
                    </tr>
                </tfoot>
            {% endif %}
        </table>
    {% endif %}
{% endmacro %}

{% import _self as apiPlatform %}

{% block toolbar %}
    {% set icon %}
        {% set status_color = collector.counters.ignored_filters|default(false) ? 'yellow' : 'default' %}
        {{ include('@ApiPlatform/DataCollector/api-platform-icon.svg') }}
    {% endset %}

    {% set text %}
        {% if collector.version %}
            <div class=\"sf-toolbar-info-piece\">
                <b>Version</b>
                <span>{{ collector.version }}</span>
            </div>
        {% endif %}
        {% if collector.resources|length == 0 %}
            <div class=\"sf-toolbar-info-piece\">
                <b>Resource Class</b>
                <span>Not an API Platform resource</span>
            </div>
        {% endif %}
        {% for resource in collector.resources %}
            <div class=\"sf-toolbar-info-piece\">
                <b>Resource Class</b>
                <span>{{ resource.resourceClass }}</span>
            </div>
            {% if resource.counters.ignored_filters|default(false) %}
                <div class=\"sf-toolbar-info-piece\">
                    <b>Ignored Filters</b>
                    <span class=\"sf-toolbar-status sf-toolbar-status-yellow\">{{ collector.counters.ignored_filters }}</span>
                </div>
            {% endif %}
        {% endfor %}
    {% endset %}

    {{ include('@WebProfiler/Profiler/toolbar_item.html.twig', { 'link': true, status: status_color }) }}
{% endblock %}

{% block menu %}
    {# This left-hand menu appears when using the full-screen profiler. #}
    <span class=\"label{{ collector.resources ? '' : ' disabled' }}\">
        <span class=\"icon\">
            {{ include('@ApiPlatform/DataCollector/api-platform.svg') }}
        </span>
        <strong>API Platform</strong>
    </span>
{% endblock %}

{% block panel %}
    {% if collector.resources|length == 0 %}
        <div class=\"metrics\">
            <div class=\"metric\">
                <span class=\"value\">Not an API Platform resource</span>
                <span class=\"label\">Resource Class</span>
            </div>
        </div>
    {% endif %}
    {% for dataCollected in collector.resources %}
        <div class=\"metrics\">
            <div class=\"metric\">
                <span class=\"value\">{{ dataCollected.resourceClass|default('Not an API Platform resource') }}</span>
                <span class=\"label\">Resource Class</span>
            </div>
        </div>
        {% if dataCollected.resourceMetadataCollection is not empty %}
            <div class=\"sf-tabs\">
                <div class=\"tab\">
                    <h3 class=\"tab-title metadata-tab-title\">Metadata</h3>
                    <h3>Resources</h3>
                    <div class=\"tab-content metadata-tab-content\">
                        <div class=\"sf-tabs\">
                            {% for resourceMetadata in dataCollected.resourceMetadataCollection %}
                                <div class=\"tab\">
                                    <h3 class=\"tab-title\">
                                        {{ resourceMetadata.resource.uriTemplate ??  resourceMetadata.resource.shortName }}
                                    </h3>
                                    <div class=\"tab-content\">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th scope=\"col\" class=\"key\">Resource</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>{{- profiler_dump(resourceMetadata.resource, 1) -}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        {{ apiPlatform.operationTable(resourceMetadata.operations, '', dataCollected.requestAttributes.operation_name|default('')) }}
                                        <table>
                                            <thead>
                                            <tr>
                                                <th scope=\"col\" class=\"key\">Filters</th>
                                                <th scope=\"col\"></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {% if dataCollected.filters and loop.index0 in dataCollected.filters|keys %}
                                                {% for id, filter in dataCollected.filters[loop.index0] %}
                                                    {% set ignored_filter = filter is same as(null) %}
                                                    <tr{% if ignored_filter %} class=\"status-warning\"{% endif %}>
                                                        <td>
                                                            {{ id }}
                                                            {% if ignored_filter %}
                                                                <span class=\"newline text-muted\">ignored filter</span>
                                                            {% else %}
                                                                {{ dump(filter) }}
                                                            {% endif %}
                                                        </td>
                                                    </tr>
                                                {% endfor %}
                                            {% else %}
                                                <tr>
                                                    <td class=\"text-muted\" colspan=\"2\">
                                                        No available filter declared for this resource.
                                                    </td>
                                                </tr>
                                            {% endif %}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        {% endif %}
    {% endfor %}
{% endblock %}

", "@ApiPlatform/DataCollector/request.html.twig", "T:\\PFA\\MedicalApp\\medicalAppServer\\Gestion de rendez-vous\\vendor\\api-platform\\core\\src\\Symfony\\Bundle\\Resources\\views\\DataCollector\\request.html.twig");
    }
}
