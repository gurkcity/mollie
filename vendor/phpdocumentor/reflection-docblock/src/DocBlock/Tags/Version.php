<?php

/**
 * phpDocumentor
 *
 * PHP Version 5.3
 *
 * @author    Vasil Rangelov <boen.robot@gmail.com>
 * @copyright 2010-2011 Mike van Riel / Naenius (http://www.naenius.com)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://phpdoc.org
 */
namespace MolliePrefix\phpDocumentor\Reflection\DocBlock\Tags;

use MolliePrefix\phpDocumentor\Reflection\Types\Context as TypeContext;
use MolliePrefix\phpDocumentor\Reflection\DocBlock\Description;
use MolliePrefix\phpDocumentor\Reflection\DocBlock\DescriptionFactory;
use MolliePrefix\Webmozart\Assert\Assert;
/**
 * Reflection class for a {@}version tag in a Docblock.
 */
final class Version extends \MolliePrefix\phpDocumentor\Reflection\DocBlock\Tags\BaseTag implements \MolliePrefix\phpDocumentor\Reflection\DocBlock\Tags\Factory\StaticMethod
{
    protected $name = 'version';
    /**
     * PCRE regular expression matching a version vector.
     * Assumes the "x" modifier.
     */
    const REGEX_VECTOR = '(?:
        # Normal release vectors.
        \\d\\S*
        |
        # VCS version vectors. Per PHPCS, they are expected to
        # follow the form of the VCS name, followed by ":", followed
        # by the version vector itself.
        # By convention, popular VCSes like CVS, SVN and GIT use "$"
        # around the actual version vector.
        [^\\s\\:]+\\:\\s*\\$[^\\$]+\\$
    )';
    /** @var string The version vector. */
    private $version = '';
    public function __construct($version = null, \MolliePrefix\phpDocumentor\Reflection\DocBlock\Description $description = null)
    {
        \MolliePrefix\Webmozart\Assert\Assert::nullOrStringNotEmpty($version);
        $this->version = $version;
        $this->description = $description;
    }
    /**
     * @return static
     */
    public static function create($body, \MolliePrefix\phpDocumentor\Reflection\DocBlock\DescriptionFactory $descriptionFactory = null, \MolliePrefix\phpDocumentor\Reflection\Types\Context $context = null)
    {
        \MolliePrefix\Webmozart\Assert\Assert::nullOrString($body);
        if (empty($body)) {
            return new static();
        }
        $matches = [];
        if (!\preg_match('/^(' . self::REGEX_VECTOR . ')\\s*(.+)?$/sux', $body, $matches)) {
            return null;
        }
        return new static($matches[1], $descriptionFactory->create(isset($matches[2]) ? $matches[2] : '', $context));
    }
    /**
     * Gets the version section of the tag.
     *
     * @return string
     */
    public function getVersion()
    {
        return $this->version;
    }
    /**
     * Returns a string representation for this tag.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->version . ($this->description ? ' ' . $this->description->render() : '');
    }
}
