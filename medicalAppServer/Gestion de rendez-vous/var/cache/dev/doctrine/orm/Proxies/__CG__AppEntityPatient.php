<?php

namespace Proxies\__CG__\App\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Patient extends \App\Entity\Patient implements \Doctrine\Persistence\Proxy
{
    use \Symfony\Component\VarExporter\LazyGhostTrait {
        initializeLazyObject as __load;
        setLazyObjectAsInitialized as public __setInitialized;
        isLazyObjectInitialized as private;
        createLazyGhost as private;
        resetLazyObject as private;
        __clone as private __doClone;
    }

    private const LAZY_OBJECT_PROPERTY_SCOPES = [
        "\0".'*'."\0".'address' => [parent::class, 'address', null],
        "\0".'*'."\0".'age' => [parent::class, 'age', null],
        "\0".'*'."\0".'cin' => [parent::class, 'cin', null],
        "\0".'*'."\0".'email' => [parent::class, 'email', null],
        "\0".'*'."\0".'firstName' => [parent::class, 'firstName', null],
        "\0".'*'."\0".'id' => [parent::class, 'id', null],
        "\0".'*'."\0".'image' => [parent::class, 'image', null],
        "\0".'*'."\0".'immatricultation' => [parent::class, 'immatricultation', null],
        "\0".'*'."\0".'lastName' => [parent::class, 'lastName', null],
        "\0".'*'."\0".'login' => [parent::class, 'login', null],
        "\0".'*'."\0".'password' => [parent::class, 'password', null],
        "\0".'*'."\0".'phoneNumber' => [parent::class, 'phoneNumber', null],
        "\0".parent::class."\0".'Appointments' => [parent::class, 'Appointments', null],
        "\0".'App\\Entity\\User'."\0".'role' => ['App\\Entity\\User', 'role', null],
        'Appointments' => [parent::class, 'Appointments', null],
        'address' => [parent::class, 'address', null],
        'age' => [parent::class, 'age', null],
        'cin' => [parent::class, 'cin', null],
        'email' => [parent::class, 'email', null],
        'firstName' => [parent::class, 'firstName', null],
        'id' => [parent::class, 'id', null],
        'image' => [parent::class, 'image', null],
        'immatricultation' => [parent::class, 'immatricultation', null],
        'lastName' => [parent::class, 'lastName', null],
        'login' => [parent::class, 'login', null],
        'password' => [parent::class, 'password', null],
        'phoneNumber' => [parent::class, 'phoneNumber', null],
        'role' => ['App\\Entity\\User', 'role', null],
    ];

    /**
     * @internal
     */
    public bool $__isCloning = false;

    public function __construct(?\Closure $initializer = null)
    {
        self::createLazyGhost($initializer, [
            "\0".'*'."\0".'id' => true,
            '__isCloning' => true,
        ], $this);
    }

    public function __isInitialized(): bool
    {
        return isset($this->lazyObjectState) && $this->isLazyObjectInitialized();
    }

    public function __clone()
    {
        $this->__isCloning = true;

        try {
            $this->__doClone();
        } finally {
            $this->__isCloning = false;
        }
    }

    public function __serialize(): array
    {
        $properties = (array) $this;
        unset($properties["\0" . self::class . "\0lazyObjectState"], $properties['__isCloning']);

        return $properties;
    }
}
