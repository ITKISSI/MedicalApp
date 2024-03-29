<?php

namespace ContainerVrzpUJo;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_Hcgmq5RService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.hcgmq5R' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.hcgmq5R'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'appointment' => ['privates', '.errored..service_locator.hcgmq5R.App\\Entity\\Appointment', NULL, 'Cannot autowire service ".service_locator.hcgmq5R": it needs an instance of "App\\Entity\\Appointment" but this type has been excluded in "config/services.yaml".'],
            'em' => ['services', 'doctrine.orm.default_entity_manager', 'getDoctrine_Orm_DefaultEntityManagerService', false],
        ], [
            'appointment' => 'App\\Entity\\Appointment',
            'em' => '?',
        ]);
    }
}
